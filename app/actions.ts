"use server";

type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

type BeehiivCreateSubscriptionPayload = {
  email: string;
  reactivate_existing: boolean;
  send_welcome_email: boolean;
  automation_ids: string[];
  double_opt_override?: "on" | "off" | "not_set";
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function parseBooleanEnv(name: string, fallback: boolean) {
  const value = process.env[name]?.trim().toLowerCase();

  if (!value) {
    return fallback;
  }

  return value === "true" || value === "1" || value === "yes";
}

function parseAutomationIds() {
  return parseRequiredEnv("BEEHIIV_AUTOMATION_IDS")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function parseDoubleOptOverride() {
  const value = process.env.BEEHIIV_DOUBLE_OPT_OVERRIDE?.trim();

  if (value === "on" || value === "off" || value === "not_set") {
    return value;
  }

  return undefined;
}

function getBeehiivErrorText(errorBody: unknown) {
  if (!errorBody || typeof errorBody !== "object") {
    return "";
  }

  if ("message" in errorBody && typeof errorBody.message === "string") {
    return errorBody.message;
  }

  if ("error" in errorBody && typeof errorBody.error === "string") {
    return errorBody.error;
  }

  return JSON.stringify(errorBody);
}

export async function joinWaitlist(
  _previousState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const emailValue = formData.get("email");

  if (typeof emailValue !== "string") {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  const email = emailValue.trim().toLowerCase();

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  let apiKey: string;
  let publicationId: string;
  let automationIds: string[];

  try {
    apiKey = parseRequiredEnv("BEEHIIV_API_KEY");
    publicationId = parseRequiredEnv("BEEHIIV_PUBLICATION_ID");
    automationIds = parseAutomationIds();
  } catch (error) {
    console.error(error);

    return {
      status: "error",
      message: "The waitlist is not configured yet.",
    };
  }

  const payload: BeehiivCreateSubscriptionPayload = {
    email,
    reactivate_existing: parseBooleanEnv("BEEHIIV_REACTIVATE_EXISTING", false),
    send_welcome_email: parseBooleanEnv("BEEHIIV_SEND_WELCOME_EMAIL", false),
    automation_ids: automationIds,
    double_opt_override: parseDoubleOptOverride(),
    utm_source: process.env.BEEHIIV_UTM_SOURCE?.trim() || "course-landing",
    utm_medium: process.env.BEEHIIV_UTM_MEDIUM?.trim() || "website",
    utm_campaign: process.env.BEEHIIV_UTM_CAMPAIGN?.trim() || "waitlist",
  };

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorBody: unknown = await response.json().catch(() => null);
      const errorText = getBeehiivErrorText(errorBody).toLowerCase();

      if (errorText.includes("already") || errorText.includes("exist")) {
        return {
          status: "success",
          message: "You're already on the waitlist.",
        };
      }

      console.error("Beehiiv waitlist submission failed", {
        status: response.status,
        error: errorBody,
      });

      return {
        status: "error",
        message: "We could not join the waitlist. Try again in a minute.",
      };
    }

    return {
      status: "success",
      message: "You're on the waitlist.",
    };
  } catch (error) {
    console.error("Beehiiv waitlist submission failed", error);

    return {
      status: "error",
      message: "We could not join the waitlist. Try again in a minute.",
    };
  }
}

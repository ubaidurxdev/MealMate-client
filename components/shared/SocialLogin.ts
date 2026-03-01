import { authClient } from "@/lib/auth-client";

export const handleGoogleLogin = async () => {
  authClient.signIn.social({
    provider: "google",
    callbackURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  });
};

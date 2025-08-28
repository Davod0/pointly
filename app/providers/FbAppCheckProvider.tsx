"use client";
import { useEffect } from "react";
import { fbApp } from "@/database/firestoreDbConfig";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

export function FbAppCheckProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
      initializeAppCheck(fbApp, {
      provider: new ReCaptchaV3Provider(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
      ),
      isTokenAutoRefreshEnabled: true,
    });

  }, []);

  return <>{children}</>;
}

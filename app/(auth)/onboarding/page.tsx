"use client";

import { useState } from "react";
import BasicInfoStep from "@/components/onboarding/basic-info-step";
import EmergencyContactsStep from "@/components/onboarding/emergency-contact-step";
import PermissionsStep from "@/components/onboarding/permissions-step";
import Link from "next/link";
import Image from "next/image";

type OnboardingData = {
  fullName?: string;
  preferredLanguage?: string;
  contactName?: string;
  contactPhone?: string;
  locationAccess?: boolean;
  microphoneAccess?: boolean;
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <main className="min-h-screen bg-black px-6 py-10 md:px-10 lg:px-16">
      <div className="mb-10 flex items-center gap-3">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="SafeSignal Logo"
            width={235}
            height={64}
            className="h-8 w-8"
          />
        </Link>
        <h3 className="text-base font-semibold text-white lg:text-lg">
          SafeSignal NG
        </h3>
      </div>

      <div className="mx-auto max-w-2xl">
        {step === 1 && (
          <BasicInfoStep
            defaultValues={data}
            onNext={(values) => {
              setData((prev) => ({ ...prev, ...values }));
              nextStep();
            }}
          />
        )}

        {step === 2 && (
          <EmergencyContactsStep
            defaultValues={data}
            onBack={prevStep}
            onNext={(values) => {
              setData((prev) => ({ ...prev, ...values }));
              nextStep();
            }}
          />
        )}

        {step === 3 && (
          <PermissionsStep
            defaultValues={data}
            onBack={prevStep}
            onFinish={(values) => {
              const finalData = { ...data, ...values };
              console.log(finalData);
            }}
          />
        )}
      </div>
    </main>
  );
}

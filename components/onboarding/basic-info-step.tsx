"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const onboardingSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  preferredLanguage: z.string().min(1, "Select a language"),
});

type OnboardingSchema = z.infer<typeof onboardingSchema>;

type BasicInfoStepProps = {
  defaultValues?: Partial<OnboardingSchema>;
  onNext?: (values: OnboardingSchema) => void;
};

const languages = ["English", "Hausa", "Yorùbá", "Igbo"];

export default function BasicInfoStep({
  defaultValues,
  onNext,
}: BasicInfoStepProps) {
  const form = useForm<OnboardingSchema>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: defaultValues?.fullName ?? "",
      preferredLanguage: defaultValues?.preferredLanguage ?? "",
    },
  });

  const onSubmit = async (values: OnboardingSchema) => {
    onNext?.(values);
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-5 md:px-20">
      <div className="w-full max-w-xl space-y-5">
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">Step 1 of 3</p>
          <h1 className="text-3xl font-bold text-white lg:text-4xl">
            Let&apos;s set up your safety profile
          </h1>
          <p className="text-sm text-white/60 lg:text-base">
            A few quick details will help SafeSignal respond faster when it
            matters most.
          </p>
        </div>

        <Card className="border border-white/10 bg-[#111620] shadow-none">
          <CardContent className="px-6 py-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your full name"
                          className="h-12 border-white/10 bg-black text-white placeholder:text-white/35 focus-visible:ring-1 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredLanguage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">
                        Preferred Language
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12 w-full border-white/10 bg-black text-white focus:ring-1 focus:ring-primary">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-white/10 bg-[#111620] text-white">
                          {languages.map((language) => (
                            <SelectItem key={language} value={language}>
                              {language}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="h-12 w-full bg-primary text-white hover:bg-[#b7281b]"
                >
                  Continue
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

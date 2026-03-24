"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Phone } from "lucide-react";

const signupSchema = z.object({
  phone: z
    .string()
    .regex(/^\d{11}$/, { message: "Your phone number must be 11 digits" }),
});

type SignupSchema = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (values: SignupSchema) => {
    console.log(values);
  };

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

        <div className="text-white">
          <h3 className="text-base font-semibold lg:text-lg">SafeSignal NG</h3>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-xl space-y-5">
          <h1 className="pb-5 text-3xl lg:text-4xl font-bold text-white">
            Create your Account
          </h1>

          <Card className="border border-white/20 bg-[#111620] shadow-none">
            <CardContent className="px-6">
              <div className="mb-8 space-y-2">
                <h2 className="text-xl lg:text-3xl font-semibold text-white">
                  Sign up with phone number
                </h2>
                <p className="text-sm lg:text-base text-white/60">
                  We&apos;ll send you a verification code to continue.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                            <Input
                              placeholder="0812 345 6789"
                              className="h-12 pl-10 text-white bg-black text-sm"
                              {...field}
                            />
                          </div>
                        </FormControl>
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

              <p className="mt-5 text-center text-sm text-white/60">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary hover:underline"
                >
                  Log in
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

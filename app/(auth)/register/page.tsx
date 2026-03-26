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
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSignup } from "@/queries/auth";
import { useState } from "react";

const signupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
type SignupSchema = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { mutate, isPending } = useSignup();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignupSchema) => {
    mutate(values, {
      onSuccess: () => {
        router.push("/onboarding");
      },
    });
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
                  Sign up with Email
                </h2>
                <p className="text-sm lg:text-base text-white/60">
                  Create your account using your email and password.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="example@gmail.com"
                            className="h-12 border border-white/10 bg-black text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="h-12 border border-white/10 bg-black text-white pr-10"
                              {...field}
                            />
                            <div
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                            >
                              {showPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="h-12 w-full bg-primary text-white hover:bg-[#b7281b]"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="animate-spin" />
                        <span>Creating acount...</span>
                      </>
                    ) : (
                      "Continue"
                    )}
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

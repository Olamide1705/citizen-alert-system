import { useMutation } from "@tanstack/react-query";
import { signupWithEmail } from "@/services/auth";

export function useSignup() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signupWithEmail(email, password),

    meta: {
      successMessage: "Account created successfully",
      additionalDescription: "Redirecting...",
      errorMessage: "Signup Failed",
    },
  });
}

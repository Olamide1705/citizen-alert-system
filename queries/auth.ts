/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { postSendOtp, postVerifyOtp } from "@/services/auth";
import type { SendOtpInput, VerifyOtpInput } from "@/types/auth";

export function useSendOtp(
  options?: UseMutationOptions<any, any, SendOtpInput, unknown>,
) {
  return useMutation({
    mutationFn: (data: SendOtpInput) => postSendOtp(data),
    meta: {
      successMessage: "OTP sent successfully",
      additionalDescription: "Check your phone for the code.",
      errorMessage: "Error sending OTP",
    },
    ...options,
  });
}

export function useVerifyOtp(
  options?: UseMutationOptions<any, any, VerifyOtpInput, unknown>,
) {
  return useMutation({
    mutationFn: (data: VerifyOtpInput) => postVerifyOtp(data),
    meta: {
      successMessage: "OTP verified successfully",
      additionalDescription: "Your number has been confirmed.",
      errorMessage: "Error verifying OTP",
    },
    ...options,
  });
}

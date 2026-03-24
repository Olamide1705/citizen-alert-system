/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@/services/http";
import type { SendOtpInput, VerifyOtpInput } from "@/types/auth";

export async function postSendOtp(formData: SendOtpInput): Promise<any> {
  return (await http.post("/api/auth/send-otp", formData)).data;
}

export async function postVerifyOtp(formData: VerifyOtpInput): Promise<any> {
  return (await http.post("/api/auth/verify-otp", formData)).data;
}
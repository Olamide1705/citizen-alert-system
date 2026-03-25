import http from "@/services/http";
import type {
  SendOtpInput,
  VerifyOtpInput,
  InterswitchApiResponse,
} from "@/types/auth";

export async function postSendOtp(
  formData: SendOtpInput,
): Promise<InterswitchApiResponse> {
  return (await http.post("/api/auth/send-otp", formData)).data;
}

export async function postVerifyOtp(
  formData: VerifyOtpInput,
): Promise<InterswitchApiResponse> {
  return (await http.post("/api/auth/verify-otp", formData)).data;
}

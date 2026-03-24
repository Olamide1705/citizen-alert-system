import axios from "axios";
import interswitchHttp from "@/services/interswitch-http";
import type {
  InterswitchAccessTokenResponse,
  SendOtpInput,
  VerifyOtpInput,
  InterswitchApiResponse,
} from "@/types/auth";

const clientId = process.env.INTERSWITCH_CLIENT_ID!;
const clientSecret = process.env.INTERSWITCH_CLIENT_SECRET!;
const passportBaseUrl = process.env.INTERSWITCH_PASSPORT_BASE_URL!;
const softTokenBaseUrl = process.env.INTERSWITCH_SOFTTOKEN_BASE_URL!;

function getBasicAuthToken() {
  return Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
}

export async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams();
  params.append("scope", "profile");
  params.append("grant_type", "client_credentials");

  const response = await axios.post<InterswitchAccessTokenResponse>(
    `${passportBaseUrl}/passport/oauth/token`,
    params.toString(),
    {
      headers: {
        Authorization: `Basic ${getBasicAuthToken()}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response.data.access_token;
}

export async function sendOtp(
  payload: SendOtpInput,
): Promise<InterswitchApiResponse> {
  const accessToken = await getAccessToken();

  const response = await interswitchHttp.post<InterswitchApiResponse>(
    `${softTokenBaseUrl}/soft-token/send`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data;
}

export async function verifyOtp(
  payload: VerifyOtpInput,
): Promise<InterswitchApiResponse> {
  const accessToken = await getAccessToken();

  const response = await interswitchHttp.post<InterswitchApiResponse>(
    `${softTokenBaseUrl}/soft-token/verify`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data;
}

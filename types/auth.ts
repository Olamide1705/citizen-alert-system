export interface InterswitchAccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
}

export interface SendOtpInput {
  tokenId: string;
  email: string;
  mobileNo: string;
}

export interface VerifyOtpInput {
  tokenId: string;
  otp: string;
}

export interface InterswitchApiResponse {
  responseCode?: string;
  responseMessage?: string;
  message?: string;
  [key: string]: unknown;
}

import { NextRequest, NextResponse } from "next/server";
import { sendOtp } from "@/lib/interswitch.server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tokenId, email, mobileNo } = body;

    if (!tokenId || !email || !mobileNo) {
      return NextResponse.json(
        { message: "tokenId, email and mobileNo are required" },
        { status: 400 },
      );
    }

    const result = await sendOtp({ tokenId, mobileNo });

    return NextResponse.json(result);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to send OTP";

    return NextResponse.json({ message }, { status: 500 });
  }
}

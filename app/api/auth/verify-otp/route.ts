// import { NextRequest, NextResponse } from "next/server";
// import { verifyOtp } from "@/lib/interswitch.server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { otp, tokenId } = body;

//     if (!otp || !tokenId) {
//       return NextResponse.json(
//         { message: "otp and tokenId are required" },
//         { status: 400 },
//       );
//     }

//     const result = await verifyOtp({ otp, tokenId });

//     return NextResponse.json(result);
//   } catch (error: unknown) {
//     const message =
//       error instanceof Error ? error.message : "Failed to verify OTP";

//     return NextResponse.json({ message }, { status: 500 });
//   }
// }

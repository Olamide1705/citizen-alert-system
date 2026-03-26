// import { NextRequest, NextResponse } from "next/server";
// import { sendOtp } from "@/lib/interswitch.server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { tokenId, email, mobileNo } = body;
//     console.log({ tokenId, email, mobileNo });

//     if (!tokenId || !email || !mobileNo) {
//       return NextResponse.json(
//         { message: "tokenId, email and mobileNo are required" },
//         { status: 400 },
//       );
//     }

//     const result = await sendOtp({ tokenId, email, mobileNo });

//     return NextResponse.json(result);
//   } catch (error: unknown) {
//     console.error("SEND OTP ROUTE ERROR:", error);

//     const message =
//       error instanceof Error ? error.message : "Failed to send OTP";

//     return NextResponse.json({ message }, { status: 500 });
//   }
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import z from "zod";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useSendOtp, useVerifyOtp } from "@/queries/auth";
// import { Loader2 } from "lucide-react";
// import { toast } from "sonner";

// const FormSchema = z.object({
//   otp: z.string().min(6, {
//     message: "OTP must be 6 digits",
//   }),
// });

// export default function OTPVerificationPage() {
//   const router = useRouter();
//   const { mutate: verifyOtp, isPending: isVerifying } = useVerifyOtp();
//   const { mutate: resendOtp, isPending: isResending } = useSendOtp();
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       otp: "",
//     },
//   });

//   const [otpValue, setOtpValue] = useState("");
//   const otp = form.watch("otp");

//   useEffect(() => {
//     setOtpValue(otp || "");
//   }, [otp]);

//   const [timeLeft, setTimeLeft] = useState(60);
//   useEffect(() => {
//     if (timeLeft <= 0) return;
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
//   const seconds = String(timeLeft % 60).padStart(2, "0");

//   const onSubmit = (values: z.infer<typeof FormSchema>) => {
//     verifyOtp(
//       { otp: values.otp },
//       {
//         onSuccess: () => {
//           router.push("/onboarding");
//         },
//         onError: () => {
//           toast.error("Invalid OTP. Please try again.");
//         },
//       },
//     );
//   };

//   const handleResend = () => {
//     if (isResending) return;

//     const sessionData = sessionStorage.getItem("signup-verification");
//     if (!sessionData) return;

//     const { phone } = JSON.parse(sessionData);
//     resendOtp({ mobileNo: phone }, { onSuccess: () => setTimeLeft(60) });
//   };

//   return (
//     <main className="min-h-screen bg-black px-6 py-10 md:px-10 lg:px-16">
//       <div className="mb-10 flex items-center gap-3">
//         <Link href="/" className="inline-block">
//           <Image
//             src="/logo.png"
//             alt="SafeSignal Logo"
//             width={235}
//             height={64}
//             className="h-8 w-8"
//           />
//         </Link>

//         <div className="text-white">
//           <h3 className="text-base font-semibold lg:text-lg">SafeSignal NG</h3>
//         </div>
//       </div>

//       <div className="flex items-center justify-center">
//         <div className="w-full max-w-xl">
//           <div className="flex flex-col space-y-2">
//             <h2 className="text-3xl lg:text-4xl font-bold text-white">
//               OTP Verification
//             </h2>
//             <p className="text-sm lg:text-base text-white/70 mb-8">
//               Enter the verification code sent to your phone number below.
//             </p>
//           </div>

//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="flex flex-col items-center justify-center space-y-4"
//             >
//               <FormField
//                 control={form.control}
//                 name="otp"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col">
//                     <FormControl>
//                       <InputOTP maxLength={6} {...field}>
//                         {Array.from({ length: 6 }, (_, i) => (
//                           <InputOTPGroup key={i}>
//                             <InputOTPSlot index={i} />
//                           </InputOTPGroup>
//                         ))}
//                       </InputOTP>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <p className="text-center my-2 text-white/70">
//                 Code expires in {minutes !== "00" && `${minutes} minutes`}{" "}
//                 {seconds} seconds
//               </p>

//               <p className="text-center my-2 pb-4 text-white/70">
//                 Didn&apos;t receive any code?{" "}
//                 <button
//                   type="button"
//                   onClick={handleResend}
//                   disabled={timeLeft > 0 || isResending}
//                   className={`text-primary hover:underline cursor-pointer ${
//                     timeLeft > 0 || isResending
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//                 >
//                   {isResending ? "Resending..." : "Resend Code"}
//                 </button>
//               </p>

//               <Button
//                 type="submit"
//                 className="h-12 w-full bg-primary text-white hover:bg-[#b7281b]"
//                 disabled={isVerifying || otpValue.length < 6}
//               >
//                 {isVerifying ? (
//                   <>
//                     <Loader2 className="animate-spin" />
//                     <span>Verifying...</span>
//                   </>
//                 ) : (
//                   "Verify"
//                 )}
//               </Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mic, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

const permissionsSchema = z.object({
  locationAccess: z.boolean(),
  microphoneAccess: z.boolean(),
});

type PermissionsSchema = z.infer<typeof permissionsSchema>;

type PermissionsStepProps = {
  defaultValues?: Partial<PermissionsSchema>;
  onBack?: () => void;
  onFinish?: (values: PermissionsSchema) => void;
};

export default function PermissionsStep({
  defaultValues,
  onBack,
  onFinish,
}: PermissionsStepProps) {
  const form = useForm<PermissionsSchema>({
    resolver: zodResolver(permissionsSchema),
    defaultValues: {
      locationAccess: defaultValues?.locationAccess ?? true,
      microphoneAccess: defaultValues?.microphoneAccess ?? true,
    },
  });

  const onSubmit = async (values: PermissionsSchema) => {
    onFinish?.(values);
    console.log(values);
  };

  return (
    <div className="w-full max-w-xl space-y-5">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Step 3 of 3</p>
        <h1 className="text-3xl font-bold text-white lg:text-4xl">
          Enable core permissions
        </h1>
        <p className="text-sm text-white/60 lg:text-base">
          These permissions help SafeSignal respond quickly during emergencies.
        </p>
      </div>

      <Card className="border border-white/10 bg-[#111620] shadow-none">
        <CardContent className="px-6 py-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="locationAccess"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-xl border border-white/10 bg-black p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#391C20] p-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-white lg:text-base">
                          Location Access
                        </h3>
                        <p className="text-xs text-white/60 lg:text-sm">
                          Share your live location with emergency contacts when
                          an SOS alert is triggered.
                        </p>
                      </div>
                    </div>

                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="microphoneAccess"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-xl border border-white/10 bg-black p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#391C20] p-2">
                        <Mic className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-white lg:text-base">
                          Microphone Access
                        </h3>
                        <p className="text-xs text-white/60 lg:text-sm">
                          Use voice input to trigger alerts and describe what is
                          happening in your preferred language.
                        </p>
                      </div>
                    </div>

                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="h-12 flex-1 border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white"
                >
                  Back
                </Button>

                <Button
                  type="submit"
                  className="h-12 flex-1 bg-primary text-white hover:bg-[#b7281b]"
                >
                  Finish Setup
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

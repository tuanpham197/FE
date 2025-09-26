"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import ClickSpark from "../../ui/ClickSpark";
import { MagicCard } from "../../ui/MagicCard";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be less than 50 characters." })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "Name can only contain letters, spaces, apostrophes, and hyphens.",
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must be less than 100 characters." }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Subject is required." })
    .min(5, { message: "Subject must be at least 5 characters." })
    .max(100, { message: "Subject must be less than 100 characters." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required." })
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Validate on change for immediate feedback
    reValidateMode: "onChange", // Re-validate on change after first error
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Prevent submission if form has errors
    if (!form.formState.isValid) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        console.error("EmailJS configuration is missing");
        toast.error("Email service is not configured. Please try again later.");
        return;
      }

      // Validate data one more time before sending
      const validatedData = formSchema.parse(data);

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
        },
        userId
      );

      console.log("Email sent successfully:", result.text);
      form.reset();
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error("Failed to send email:", error);

      // Provide more specific error messages
      if (error instanceof z.ZodError) {
        toast.error("Please check your form data and try again.");
        return;
      }

      if (error instanceof Error) {
        if (error.message.includes("network")) {
          toast.error(
            "Network error. Please check your connection and try again."
          );
        } else if (error.message.includes("timeout")) {
          toast.error("Request timeout. Please try again.");
        } else {
          toast.error("Failed to send message. Please try again later.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <MagicCard
        gradientColor="#7e7e7e12"
        className={cn(
          "group container overflow-hidden transition-all duration-300",
          "border-[var(--card-border-color)] bg-[var(--card-background)]"
        )}
        ref={undefined}
      >
        <div className="flex flex-col bg-transparent">
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 bg-transparent py-[20px] px-[0] border-none"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--headline)]">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          className={cn(
                            "rounded-[8px] border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]",
                            form.formState.errors.name &&
                              "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm font-medium mt-1 bg-red-50 dark:bg-red-950/20 px-2 py-1 rounded-md" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--headline)]">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className={cn(
                            "rounded-[8px] border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]",
                            form.formState.errors.email &&
                              "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm font-medium mt-1 bg-red-50 dark:bg-red-950/20 px-2 py-1 rounded-md" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--headline)]">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter message subject"
                          className={cn(
                            "rounded-[8px] border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]",
                            form.formState.errors.subject &&
                              "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm font-medium mt-1 bg-red-50 dark:bg-red-950/20 px-2 py-1 rounded-md" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--headline)]">
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here"
                          className={cn(
                            "h-[200px] rounded-[8px] border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]",
                            form.formState.errors.message &&
                              "border-red-500 focus:border-red-500 focus:ring-red-500"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage className="text-red-500 text-sm font-medium mt-1 bg-red-50 dark:bg-red-950/20 px-2 py-1 rounded-md" />
                        <span className="text-sm text-gray-500 mt-1">
                          {field.value?.length || 0}/1000
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting || !form.formState.isValid}
                  className={cn(
                    "w-max bg-[var(--button)] text-[var(--button-text)] hover:bg-[var(--button2)]",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {Object.keys(form.formState.errors).length > 0 && (
                  <div className="text-sm text-red-500 mt-2">
                    Please input value for{" "}
                    {Object.keys(form.formState.errors).length} fields
                    {Object.keys(form.formState.errors).length === 1
                      ? ""
                      : "s"}{" "}
                    above.
                  </div>
                )}
              </form>
            </Form>
          </ClickSpark>
        </div>
      </MagicCard>
    </div>
  );
}

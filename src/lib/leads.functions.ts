import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  interest: z.enum(["ai-automation", "cloud-devops", "modernization", "web-development", "not-sure"]),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      interest: data.interest,
      message: data.message,
    });
    if (error) throw new Error("We couldn't record your request. Please email us instead.");
    return { ok: true as const };
  });

import { z } from "zod";

export const envSchema = z
  .object({
    DATABASE_URL: z.string().nonempty(),
    // RESEND_API_KEY: z.string().nonempty(),
    GMAIL_USER: z.string().nonempty(),
    GMAIL_PASSWORD: z.string().nonempty(),
  })
  .transform((env) => {
    return {
      DATABASE_URL: env.DATABASE_URL,
      gmail: {
        user: env.GMAIL_USER,
        pass: env.GMAIL_PASSWORD,
      },
    };
  });

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);

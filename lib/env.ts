import { z } from "zod";

export const envSchema = z
  .object({
    DATABASE_URL: z.string().nonempty(),
  })
  .transform((env) => {
    return {
      DATABASE_URL: env.DATABASE_URL,
    };
  });

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);

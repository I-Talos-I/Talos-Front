// schemas/post.schema.ts
import { z } from "zod";

export const commandSchema = z.string().min(1);

export const dependencySchema = z.object({
  name: z.string().min(1),
  versions: z.array(z.string().min(1)),
  commands: z.object({
    linux: z.array(commandSchema),
    windows: z.array(commandSchema),
    macOS: z.array(commandSchema),
  }),
});

export const postSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  repositoryUrl: z.string().url(),
  isPublic: z.boolean(),
  licenseType: z.string().min(1),
  dependencies: z.array(dependencySchema),
});

export type PostFormValues = z.infer<typeof postSchema>;

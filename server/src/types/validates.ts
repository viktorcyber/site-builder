import * as z from "zod";

const User = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email(),
    password: z.string().min(6, "Password must be at least 6 characters long").optional(),
    avatar: z.url().optional()
});

export type User = z.infer<typeof User>;
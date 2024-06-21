import { z } from "zod";

export const postSchema = z.object({
	userId: z.coerce.number(),
	title: z.string(),
	body: z.string(),
});

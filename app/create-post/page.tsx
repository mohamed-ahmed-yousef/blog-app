"use client";
import { Button } from "@/components/styled-components/button";
import { Main } from "@/components/styled-components/main";
import { Section } from "@/components/styled-components/section";
import { FormInput } from "@/components/ui/input-form";
import { useToast } from "@/components/ui/use-toast";
import { useZodForm } from "@/lib/use-zod-schema";
import type { Page } from "@/types";
import { useRouter } from "next/navigation";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

export const postSchema = z.object({
	title: z.string(),
	body: z.string(),
});

export default function CreatePost() {
	const router = useRouter();
	const { toast } = useToast();
	const form = useZodForm({
		schema: postSchema,
	});

	const handleSubmit = (data: { body: string; title: string }) => {
		toast({
			title: "data created successfully",
			variant: "success",
		});
		addNewPost(data);
		router.push("/");
	};

	return (
		<Main>
			<Section>
				<FormProvider {...form}>
					<form
						className="space-y-3"
						onSubmit={form.handleSubmit((data) => handleSubmit(data))}
					>
						<FormInput name="title" label="Title" />
						<FormInput name="body" label="Body" />
						<Button>Create post</Button>
					</form>
				</FormProvider>
			</Section>
		</Main>
	);
}
export const getCurrentPosts = (): Page[] => {
	const posts = localStorage.getItem("posts");
	return posts ? JSON.parse(posts) : [];
};

const addNewPost = (data: Omit<Page, "userId" | "id">) => {
	const currentPosts = getCurrentPosts();
	const newId = currentPosts.length + 100 + 1;
	const newData = {
		...data,
		userId: Math.floor(Math.random() * 91) + 10,
		id: newId,
	};
	localStorage.setItem("posts", JSON.stringify([...currentPosts, newData]));
};

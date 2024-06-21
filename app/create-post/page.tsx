"use client";

import { FormInput } from "@/components/ui/input-form";
import { useToast } from "@/components/ui/use-toast";
import { useZodForm } from "@/lib/use-zod-schema";
import { FormProvider } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";
import { Button } from "../page";

export const postSchema = z.object({
	userId: z.coerce.number(),
	title: z.string(),
	body: z.string(),
});

export default function CreatePost() {
	const form = useZodForm({
		schema: postSchema,
	});
	const { toast } = useToast();
	const handleSubmit = () => {
		console.log("yousef");
		toast({
			title: "Error",
			description: "no backend to post data",
			variant: "destructive",
		});
	};

	return (
		<Main>
			<Section>
				<FormProvider {...form}>
					<form
						className="space-y-3"
						onSubmit={form.handleSubmit((_data) => handleSubmit())}
					>
						<FormInput name="userId" label="User Id" />
						<FormInput name="title" label="Title" />
						<FormInput name="body" label="Body" />
						<Button>Create post</Button>
					</form>
				</FormProvider>
			</Section>
		</Main>
	);
}

const Main = styled.main`
display: flex;
	justify-items: center;
	height: 100vh;
	align-items: center;
    background-color: #0f172a;
`;

const Section = styled.section`
     padding: 20px;
    border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	width: min(800px, 96vw);
  margin: 40px auto;
  color: #020617;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  background-color: #94a3b8;
`;

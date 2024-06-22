"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
	type ControllerRenderProps,
	type FieldPath,
	type FieldValues,
	type PathValue,
	useFormContext,
} from "react-hook-form";
import * as Form from "./form";

interface FieldWrapperProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
	name: TName;
	label?: string;
	description?: string;
	defaultValue?: PathValue<TFieldValues, TName>;
	disabled?: boolean;
	wrapperClassName?: string;
}

export const FieldWrapper = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	name,
	label,
	description,
	defaultValue,
	disabled,
	hidden,
	render,
	wrapperClassName,
}: FieldWrapperProps<TFieldValues, TName> & {
	hidden?: boolean;
	render: (
		field: ControllerRenderProps<TFieldValues, TName>,
	) => React.ReactElement;
}) => {
	const form = useFormContext<TFieldValues>();
	return (
		<Form.FormField<TFieldValues, TName>
			name={name}
			control={form.control}
			defaultValue={defaultValue}
			disabled={disabled}
			render={({ field }) =>
				hidden ? (
					render(field)
				) : (
					<Form.FormItem className={wrapperClassName}>
						{label && <Form.FormLabel>{label}</Form.FormLabel>}
						<Form.FormControl>{render(field)}</Form.FormControl>
						{description && (
							<Form.FormDescription>{description}</Form.FormDescription>
						)}
						<Form.FormMessage />
					</Form.FormItem>
				)
			}
		/>
	);
};

interface FormInputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			"value" | "defaultValue" | "name"
		>,
		FieldWrapperProps<TFieldValues, TName> {}

const FormInput = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	type,
	label,
	description,
	name,
	disabled,
	defaultValue,
	className,
	wrapperClassName,
	...props
}: FormInputProps<TFieldValues, TName>) => {
	return (
		<FieldWrapper
			name={name}
			label={label}
			description={description}
			disabled={disabled}
			defaultValue={defaultValue}
			hidden={type === "hidden"}
			wrapperClassName={wrapperClassName}
			render={(field) => (
				<input
					type={type}
					className={cn(
						type !== "hidden" && [
							"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
							"ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						],
						className,
					)}
					{...props}
					{...field}
				/>
			)}
		/>
	);
};

export interface TextareaProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
			React.TextareaHTMLAttributes<HTMLTextAreaElement>,
			"name" | "value" | "defaultValue"
		>,
		FieldWrapperProps<TFieldValues, TName> {}

const TextareaField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	label,
	description,
	className,
	defaultValue,
	name,
	disabled,
	wrapperClassName,
	...props
}: TextareaProps<TFieldValues, TName>) => {
	return (
		<FieldWrapper
			name={name}
			label={label}
			description={description}
			defaultValue={defaultValue}
			disabled={disabled}
			wrapperClassName={wrapperClassName}
			render={(field) => (
				<textarea
					className={cn(
						"flex min-h-[80px] h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					{...props}
					{...field}
				/>
			)}
		/>
	);
};

/**
 * Similar to FormMessage of the field but this is for the form messages
 */
const FormRootMessage = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
	const {
		formState: { errors },
	} = useFormContext();
	const body = children || errors.root?.message;

	if (!body) return null;

	return (
		<p
			ref={ref}
			className={cn("text-xs font-medium text-destructive", className)}
			{...props}
		>
			{body}
		</p>
	);
});
FormRootMessage.displayName = "FormRootMessage";

export {
	type FormInputProps,
	type FieldWrapperProps,
	FormInput,
	TextareaField,
	FormRootMessage,
};

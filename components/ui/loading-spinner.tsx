import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
	className?: string;
}

export const LoadingSpinner = ({
	className,
	strokeWidth,
	...props
}: ISVGProps) => {
	if (props.size && props.size >= 70 && typeof strokeWidth === "undefined") {
		strokeWidth = 1;
	}
	return (
		<Loader2
			{...props}
			strokeWidth={strokeWidth}
			className={cn("text-primary animate-spin", className)}
		/>
	);
};

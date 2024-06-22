import { LoadingSpinner } from "@/components/ui/loading-spinner";

export function CustomizeSpinner() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "calc(100vw - 100px)",
				height: "calc(100vh - 100px)",
			}}
		>
			<LoadingSpinner size={40} />
		</div>
	);
}

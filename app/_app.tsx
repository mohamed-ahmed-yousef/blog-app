"use client";

import { LoadingSpinner } from "@/components/ui/loading-spinner";
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Suspense } from "react";

const queryClient = new QueryClient();
export default function App({ children }: { children: React.ReactNode }) {
	if (typeof window === "undefined")
		return (
			<div className="fixed flex items-center justify-center w-screen h-screen overflow-hidden">
				<LoadingSpinner size={40} className="absolute m-0" />
			</div>
		);

	return (
		<Suspense
			fallback={
				<div className="fixed flex items-center justify-center w-screen h-screen overflow-hidden">
					<LoadingSpinner size={40} className="absolute m-0" />
				</div>
			}
		>
			<ProgressBar
				height="4px"
				color="hsl(var(--secondary))"
				shallowRouting
				options={{ showSpinner: false }}
			/>

			<QueryClientProvider client={queryClient}>
				<HydrationBoundary>{children}</HydrationBoundary>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Suspense>
	);
}

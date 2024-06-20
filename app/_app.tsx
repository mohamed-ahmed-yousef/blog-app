"use client";

import { LoadingSpinner } from "@/components/ui/loading-spinner";
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";

const queryClient = new QueryClient();
export default function App({ children }: { children: React.ReactNode }) {
	return (
		<Suspense
			fallback={
				<div className="grid w-screen h-screen place-items-center">
					<LoadingSpinner size={100} />
				</div>
			}
		>
			<QueryClientProvider client={queryClient}>
				<HydrationBoundary>{children}</HydrationBoundary>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Suspense>
	);
}

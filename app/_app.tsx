"use client";

import { CustomizeSpinner } from "@/components/styled-components/loading-spinner";
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Suspense } from "react";
import NavBar from "./_components/nav-bar";

const queryClient = new QueryClient();
export default function App({ children }: { children: React.ReactNode }) {
	if (typeof window === "undefined") return <CustomizeSpinner />;

	return (
		<Suspense fallback={<CustomizeSpinner />}>
			<ProgressBar
				height="4px"
				color="hsl(var(--secondary))"
				shallowRouting
				options={{ showSpinner: false }}
			/>

			<QueryClientProvider client={queryClient}>
				<HydrationBoundary>
					<NavBar />
					{children}
				</HydrationBoundary>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Suspense>
	);
}

"use client";
import { Button } from "@/components/styled-components/button";
export default function GlobalError({
	_error,
	reset,
}: {
	_error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="en">
			<body>
				<h2>Something went wrong!</h2>
				<Button type="button" onClick={() => reset()}>
					Try again
				</Button>
			</body>
		</html>
	);
}

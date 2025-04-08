import { ModeToggle } from "./mode-toggle";
import { Options } from "./options";
import { CallToAction } from "./cta";
import type { FC } from "react";

export const Navbar: FC = () => (
	<nav className="border-t-4 border-primary">
		<div className="flex items-center justify-between px-6 py-4 text-xl font-semibold">
			<div className="flex items-center gap-1.5">
				<a
					href="https://eslint.org/"
					aria-label="Homepage"
					className="flex"
				>
					<img
						src="/languages/eslint.svg"
						alt="Code Explorer"
						width={32}
						height={32}
					/>
					<p className="ml-1 hidden sm:block">ESLint</p>
					<p className="ml-1 hidden text-muted-foreground sm:block">
						Code Explorer
					</p>
				</a>
			</div>
			<div className="flex items-center gap-2">
				<ModeToggle />
				<Options />
				<CallToAction />
			</div>
		</div>
	</nav>
);

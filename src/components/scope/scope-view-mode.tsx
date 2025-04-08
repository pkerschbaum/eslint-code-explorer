"use client";

import { useExplorer } from "@/hooks/use-explorer";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { scopeViewOptions } from "@/lib/const";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const ScopeViewMode: FC = () => {
	const explorer = useExplorer();
	const { viewModes, setViewModes } = explorer;
	const { scopeView } = viewModes;

	const handleValueChange = (value: string) => {
		if (!value) {
			return;
		}

		setViewModes({ ...viewModes, scopeView: value as "nested" | "flat" });
	};

	return (
		<ToggleGroup
			type="single"
			value={scopeView}
			onValueChange={handleValueChange}
			className="rounded-md border border-card"
		>
			{scopeViewOptions.map(option => (
				<ToggleGroupItem
					key={option.value}
					value={option.value}
					className={cn(
						"-m-px flex items-center gap-1.5 border border-card",
						option.value === scopeView
							? "!bg-background"
							: "border-transparent text-muted-foreground hover:bg-transparent",
					)}
				>
					<option.icon size={16} />
					{option.label}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	);
};

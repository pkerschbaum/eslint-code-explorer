"use client";

import { useExplorer } from "@/hooks/use-explorer";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { astViewOptions } from "@/lib/const";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const AstViewMode: FC = () => {
	const { viewModes, setViewModes } = useExplorer();
	const { astView } = viewModes;

	const handleValueChange = (value: string) => {
		if (!value) {
			return;
		}

		setViewModes({ ...viewModes, astView: value as "tree" | "json" });
	};

	return (
		<ToggleGroup
			type="single"
			value={astView}
			onValueChange={handleValueChange}
			className="rounded-md border"
		>
			{astViewOptions.map(option => (
				<ToggleGroupItem
					key={option.value}
					value={option.value}
					className={cn(
						"-m-px flex items-center gap-1.5 border",
						option.value === astView
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

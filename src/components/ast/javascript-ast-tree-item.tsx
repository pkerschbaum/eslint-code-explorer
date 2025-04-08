import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { TreeEntry } from "../tree-entry";
import type { FC } from "react";
import type * as espree from "espree";
import { cn } from "@/lib/utils";

export type JavascriptAstTreeItemProperties = {
	readonly index: number;
	readonly data:
		| ReturnType<typeof espree.parse>
		| ReturnType<typeof espree.parse>["body"][number];
	readonly esqueryMatchedNodes: unknown[];
};

export const JavascriptAstTreeItem: FC<JavascriptAstTreeItemProperties> = ({
	data,
	index,
	esqueryMatchedNodes,
}) => {
	const isEsqueryMatchedNode = esqueryMatchedNodes.includes(data);

	return (
		<AccordionItem
			value={`${index}-${data.type}`}
			className={cn(
				"overflow-hidden rounded-lg border border-card",
				isEsqueryMatchedNode && "border-4 border-primary",
			)}
		>
			<AccordionTrigger className="bg-card px-4 py-3 text-sm capitalize">
				{data.type}
			</AccordionTrigger>
			<AccordionContent className="border-t p-4">
				<ul className="space-y-1">
					{Object.entries(data).map(item => (
						<TreeEntry
							key={item[0]}
							data={item}
							esqueryMatchedNodes={esqueryMatchedNodes}
						/>
					))}
				</ul>
			</AccordionContent>
		</AccordionItem>
	);
};

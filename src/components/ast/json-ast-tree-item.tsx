import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { TreeEntry } from "../tree-entry";
import type { FC } from "react";
import { cn } from "@/lib/utils";

type ASTNode = {
	readonly type: string;
	readonly [key: string]: unknown;
};

export type JsonAstTreeItemProperties = {
	readonly index: number;
	readonly data: ASTNode;
	readonly esqueryMatchedNodes: ASTNode[];
};

export const JsonAstTreeItem: FC<JsonAstTreeItemProperties> = ({
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

import { type Meta, type StoryObj } from "@storybook/react";
import { SunIcon } from "lucide-react";

import { Button, sizes, variants } from "./button";

const meta = {
	title: "Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SizesAndVariants: Story = {
	render: () => (
		<div className="grid grid-cols-6 gap-4">
			{sizes.map(size =>
				variants.map(variant => {
					const key = `${size}-${variant}`;

					let label;
					if (size === "icon") {
						label = (
							<SunIcon className="h-5 w-5 duration-300 transition-transform dark:-rotate-90 dark:scale-0" />
						);
					} else {
						label = key;
					}

					return (
						<Button key={key} size={size} variant={variant}>
							{label}
						</Button>
					);
				}),
			)}
		</div>
	),
};

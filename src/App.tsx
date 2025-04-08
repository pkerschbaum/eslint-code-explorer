import "./App.css";
import { Navbar } from "./components/navbar";
import { useExplorer } from "./hooks/use-explorer";
import { tools } from "./lib/tools";
import { Editor } from "./components/editor";
import { EsquerySelectorInput } from "./components/esquery-selector-input";
import { ToolSelector } from "./components/tool-selector";
import { ThemeProvider } from "./components/theme-provider";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useAST } from "@/hooks/use-ast";
import { convertNodesToRanges } from "@/lib/convert-nodes-to-ranges";

function App() {
	const { language, tool, code, setCode } = useExplorer();

	const astParseResult = useAST();

	const activeTool = tools.find(({ value }) => value === tool) ?? tools[0];
	return (
		<ThemeProvider>
			<div className="touch-manipulation font-sans antialiased">
				<div className="flex h-screen flex-col">
					<Navbar />
					<div className="h-full overflow-hidden">
						<div className="h-full border-t">
							<PanelGroup
								direction="horizontal"
								className="h-full border-t"
							>
								<Panel
									defaultSize={50}
									minSize={25}
									role="region"
									aria-label="Code Editor Panel"
								>
									<EsquerySelectorInput />
									<Editor
										value={code[language]}
										highlightedRanges={
											astParseResult.ok
												? convertNodesToRanges(
														astParseResult.esqueryMatchedNodes,
													)
												: undefined
										}
										onChange={value => {
											setCode({
												...code,
												[language]: value,
											});
										}}
									/>
								</Panel>
								<PanelResizeHandle className="w-2 bg-gray-200 bg-gutter bg-center bg-no-repeat dark:bg-gray-600" />
								<Panel
									defaultSize={50}
									minSize={25}
									role="region"
									aria-label="Code Analysis Tools Panel"
								>
									<div className="relative flex h-[70dvh] flex-col overflow-auto bg-muted sm:h-full">
										<div className="z-10 flex flex-col justify-between gap-2 p-4 sm:flex-row sm:items-center">
											<ToolSelector />
											<div className="flex items-center gap-1">
												{activeTool.options.map(
													(Option, index) => (
														<Option key={index} />
													),
												)}
											</div>
										</div>
										<activeTool.component />
									</div>
								</Panel>
							</PanelGroup>
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;

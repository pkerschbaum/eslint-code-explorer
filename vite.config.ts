import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	build: {
		outDir: "build",
	},
	esbuild: {
		keepNames: true,
	},
	define: {
		"process.env.NODE_DEBUG": JSON.stringify(process.env.NODE_DEBUG),
	},
	server: {
		// accept connections on 127.0.0.1 because "localhost" is not resolved correctly by Playwright in CI
		host: "127.0.0.1",
	},
});

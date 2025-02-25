// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	define: {},
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "../build", // Outputs to project/build/ instead of frontend/dist/
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]",
			},
		},
	},
});

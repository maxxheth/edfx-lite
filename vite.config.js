import { defineConfig } from "vite";
import path from "path";
import VitePluginBrowserSync from "vite-plugin-browser-sync";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				home: path.resolve(__dirname, "./assets/js/src/pages/home.js"),
				about: path.resolve(__dirname, "./assets/js/src/pages/about.js"),
				portfolio: path.resolve(
					__dirname,
					"./assets/js/src/pages/portfolio.js",
				),
				services: path.resolve(__dirname, "./assets/js/src/pages/services.js"),
				blog: path.resolve(__dirname, "./assets/js/src/pages/blog.js"),
				contact: path.resolve(__dirname, "./assets/js/src/pages/contact.js"),
				style: path.resolve(__dirname, "./assets/css/src/style.scss"),
				servicePage: path.resolve(
					__dirname,
					"./assets/js/src/pages/service-page.js",
				),
				splash: path.resolve(__dirname, "./assets/js/src/pages/splash.js"),
			},
		},
		dir: path.resolve(__dirname, "./assets/js/dist"),
		format: "es", // You can change this to 'iife' or 'umd' if needed
		sourcemap: true,
		entryFileNames: "[name].bundle.js",
		// Additional build options as needed
	},
  plugins: [VitePluginBrowserSync()],
	// Additional Vite configuration as needed
});

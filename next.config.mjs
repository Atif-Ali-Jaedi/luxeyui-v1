import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
				pathname: "/gh/devicons/devicon@latest/icons/**",
			},
		],
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
	},
});

export default withMDX(nextConfig);

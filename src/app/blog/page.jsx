import { BlogCardWithTabs } from "@/components/ui/others/BlogCardWithTabs";

export const metadata = {
	title: "Blog | LuxeyUI - Elevate your design effortlessly and quickly",
	description:
		"Design the web prettier. Make stunning, modern, and fast websites regardless of your level of design expertise.",
};

const Blog = () => {
	return (
		<section className="mx-auto my-16 w-full max-w-[871px]">
			<BlogCardWithTabs />
		</section>
	);
};

export default Blog;

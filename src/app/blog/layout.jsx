import { CTA } from "@/layouts";

const BlogLayout = ({ children }) => {
	return (
		<>
			{children}
			<CTA />
		</>
	);
};

export default BlogLayout;

import { metadata } from "@/content/blog/metadata";
import { common } from "@/content/docs/metadata";
import { Post } from "@/layouts";
import { notFound } from "next/navigation";

const loadMDXContent = async path => {
	try {
		const { default: MDXContent } = await import(
			`@/content/blog/${path}.mdx`
		);
		return MDXContent;
	} catch (error) {
		console.error("Failed to load MDX content:", error);
		return null;
	}
};

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const pageMetadata = metadata[slug];

	if (!pageMetadata)
		return {
			title: "Content Not Found",
			description: "The requested page does not exist.",
		};

	return {
		title: pageMetadata.title,
		description: pageMetadata.description,
	};
}

const generatePostData = async path => {
	const pageMetadata = await metadata[path];
	if (!pageMetadata)
		return {
			title: "Content Not Found",
			description: "The requested page does not exist.",
		};
	const { title, description, properties } = pageMetadata;
	return { title: title, description: description, properties: properties };
};

const BlogPost = async ({ params }) => {
	const { slug } = await params;
	const MDXContent = await loadMDXContent(slug);
	const { title, description, properties } = await generatePostData(slug);

	if (!MDXContent) return notFound();
	return (
		<>
			<div className="mx-auto mt-16 max-w-[682px] prose-h1:my-0 prose-h1:font-semibold">
				<Post
					category={properties.category}
					date={properties.date}
					title={title.replace(common, "")}
					cover={properties.cover}
					description={description}
					Content={MDXContent}
				/>
			</div>
			{/* <CTA/> */}
		</>
	);
};

export default BlogPost;

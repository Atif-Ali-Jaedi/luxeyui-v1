import { Breadcrumb, Linking } from "@/components";
import metadata from "@/content/docs/metadata";
import { Contents } from "@/layouts";
import { notFound } from "next/navigation";

const loadMDXContent = async path => {
	try {
		const { default: MDXContent } = await import(
			`@/content/docs/${path}.mdx`
		);
		return MDXContent;
	} catch (error) {
		console.error("Failed to load MDX content:", error);
		return null;
	}
};

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const mSlug = slug ? slug.join("/") : "index";
	const path = mSlug === "introduction" ? "guide/introduction" : mSlug;

	const pageMetadata = metadata[path];

	if (!pageMetadata)
		return {
			title: "Content Not Found",
			description: "The requested page does not exist.",
		};

	return {
		title: pageMetadata.title,
		description: pageMetadata.description,
		opengraph: {
			title: pageMetadata.title,
			description: pageMetadata.description,
		},
		twitter: {
			title: pageMetadata.title,
			description: pageMetadata.description,
		},
	};
}

const Page = async ({ params }) => {
	const { slug } = await params;
	const mSlug = slug ? slug.join("/") : "index";
	const path = mSlug === "introduction" ? "guide/introduction" : mSlug;

	const MDXContent = await loadMDXContent(path);

	if (!MDXContent) return notFound();

	return (
		<>
			<article className="*: col-span-12 mt-10 prose-h1:mt-2.5 prose-li:my-3 lg:col-span-10 lg:px-16 prose-h1:lg:text-4xl xl:col-span-8 [&_ul>li>strong]:font-medium [&_ul>li>strong]:text-pink-500 dark:[&_ul>li>strong]:text-cyan-500">
				<Breadcrumb data={[...slug]} />
				<h1>
					{slug
						.pop()
						.replace(/%20/g, "-")
						.split("-")
						.map(s => s.charAt(0).toUpperCase() + s.slice(1))
						.join(" ")}
				</h1>
				<MDXContent />
				<Linking />
			</article>
			<Contents />
		</>
	);
};

export default Page;

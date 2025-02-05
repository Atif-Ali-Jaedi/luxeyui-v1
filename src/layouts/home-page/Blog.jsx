import { ArrowIcon } from "@/assets/icons";
import { BlogCard, Button } from "@/components";
import { metadata } from "@/content/blog/metadata";
import { common } from "@/content/docs/metadata";
import Link from "next/link";

export const Blog = () => {
	return (
		<section className="mb-24 mt-48 lg:prose-lg">
			<div>
				<h2 className="!my-0 !mb-4 text-4xl xl:text-5xl">
					Latest News
				</h2>
				<div className="flex justify-between gap-4 max-sm:flex-col sm:items-center">
					<h3 className="!my-0 !text-lg font-normal text-zinc-600 dark:text-zinc-300">
						Explore topics ranging from Latest Announcements,
						Changelog and more.{" "}
					</h3>
					<Link href={"/blog"}>
						<Button radius={"full"} className={"px-6"} size={"lg"}>
							Read More
							<ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
						</Button>
					</Link>
				</div>
			</div>
			<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{Object.entries(metadata)
					.slice(0, 3)
					.map(([key, value]) => (
						<BlogCard
							key={key}
							cover={value.properties.cover}
							title={value.title.replace(common, "")}
							date={value.properties.date}
							category={value.properties.category}
							link={`/blog/${key}`}
						/>
					))}
			</div>
		</section>
	);
};

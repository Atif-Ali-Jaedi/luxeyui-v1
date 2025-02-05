import { ArrowIcon } from "@/assets/icons";
import { Button } from "@/components";
import Link from "next/link";

export const CTA = () => {
	return (
		<section className="relative flex w-full flex-col items-center justify-center gap-8 overflow-visible py-16 text-center md:py-24 lg:gap-8 lg:py-20">
			<div className="col-span-full mx-auto flex max-w-2xl flex-col gap-8 text-center">
				<h2 className="!my-0 text-4xl font-bold xl:text-5xl">
					Ready to Transform Your Next Design Project?
				</h2>
				<p className="lg:text-lg">
					Try LuxeyUI for enhancing your applications with our
					versatile UI components seamlessly to elevate your designs
					today.
				</p>
			</div>
			<Link href="/docs/components/accordion" className="-mt-5">
				<Button size={"lg"} radius={"full"}>
					Explore Components
					<ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
				</Button>
			</Link>
		</section>
	);
};

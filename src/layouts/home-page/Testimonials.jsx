import { Marquee } from "@/components/ui/others/Marquee";
import Image from "next/image";

const Testimonial = () => (
	<div className="relative flex max-w-[320px] flex-col flex-nowrap items-start justify-start gap-4 rounded-3xl border border-zinc-200 p-8 dark:border-zinc-700">
		<div className="relative flex w-full flex-none flex-shrink-0 transform-none flex-col justify-start overflow-hidden whitespace-pre-wrap outline-none [word-break:break-word] [word-wrap:break-word]">
			<p className="!my-0 text-sm leading-[26px]">
				LuxeyUI has made my design process so much faster and easier.
				I&apos;ve been using it for a few months now and I can&apos;t
				wait to see what else I can achieve with it.
			</p>
		</div>
		<div className="flex w-full items-center gap-4">
			<Image
				width={36}
				height={36}
				draggable={false}
				className="!my-0 rounded-lg"
				src="/Atif_Ali_Jaedi.jpg"
				alt="Testimonial 1"
			/>

			<p className="!my-0 text-sm font-semibold text-obsidian dark:text-smoke">
				John Doe
			</p>
		</div>
	</div>
);

export const Testimonials = () => {
	return (
		<section className="my-24 lg:prose-lg">
			<h2 className="!mb-6 text-center text-4xl xl:text-5xl">
				Our wall of love
			</h2>
			<p className="text-center">
				Read what frontend developers are saying about LuxeyUI
			</p>
			<Marquee
				pauseOnHover
				className="mt-16 flex items-center [--gap:2em] [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_100px,#000_calc(100%_-_100px),transparent)]"
			>
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</Marquee>
			<Marquee
				pauseOnHover
				reverse
				className="mt-6 flex items-center [--gap:2em] [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_100px,#000_calc(100%_-_100px),transparent)]"
			>
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</Marquee>
		</section>
	);
};

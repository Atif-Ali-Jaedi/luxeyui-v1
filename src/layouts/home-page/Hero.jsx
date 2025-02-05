import { ArrowIcon } from "@/assets/icons";
import { Button } from "@/components";
import { Spotlight } from "@/components/ui/others/Spotlight";
import { Snippet } from "@/components/ui/Snippet";
import Image from "next/image";
import Link from "next/link";
import { HeroIllustration } from "..";

export const Hero = () => {
	return (
		<section className="bg-grid-white/[0.02] relative min-h-[calc(100vh-64px)] w-full max-w-none rounded-md antialiased lg:prose-lg dark:bg-dark/[0.96]">
			<Spotlight
				className="-top-32 left-0 md:-left-32 md:-top-32"
				fill="white"
			/>

			<div className="relative z-[2] flex flex-col items-center justify-center gap-8 sm:gap-12 lg:flex-row">
				<div className="mt-24 flex basis-1/2 flex-col items-center text-center lg:block lg:text-start">
					<div className="relative mb-4 box-border inline-flex h-7 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full border-2 border-zinc-300 px-1 text-sm dark:border-zinc-600">
						<span className="ml-1 h-2 w-2 rounded-full bg-primary-500"></span>
						<span className="flex-1 px-2 font-normal text-inherit">
							1.0 release is coming!🎉
						</span>
					</div>
					<h1 className="mb-4 bg-opacity-50 bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text !leading-snug text-transparent dark:from-zinc-50 dark:to-zinc-400">
						Create Stunning Websites Regardless of Your Level of
						Design Expertise.
					</h1>
					<p>
						A simpilistic and beautiful TailwindCSS UI component
						library.
					</p>
					<div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
						<Link href="/docs/introduction">
							<Button
								radius={"full"}
								size={"lg"}
								className="w-full"
							>
								Get Started{" "}
								<ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
							</Button>
						</Link>
						<Snippet />
					</div>
				</div>
				<div className="mb-12 mt-24 flex basis-1/2 flex-col items-center justify-center">
					<HeroIllustration />
				</div>
			</div>
			<div className="pointer-events-none absolute -left-6 top-[40em] z-[1] h-auto w-[calc(100vw-1.5em)] select-none overflow-hidden opacity-40 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white after:to-transparent after:content-[''] dark:after:from-dark md:left-24 md:top-36 md:w-auto">
				<Image
					src="/looper-bg.png"
					width={1280}
					className="translate-x-96 scale-[4] sm:scale-[2] md:translate-x-0 md:scale-110"
					height={960}
					aria-hidden
					draggable={false}
					alt=" "
				/>
			</div>
		</section>
	);
};

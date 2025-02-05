import Image from "next/image";

const URL = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const techIcons = [
	{
		src: `${URL}nextjs/nextjs-original.svg`,
		alt: "Next.js",
	},
	{
		src: `${URL}vitejs/vitejs-plain.svg`,
		alt: "Vite",
	},
	{
		src: `${URL}react/react-original.svg`,
		alt: "React",
	},
	{
		src: `${URL}astro/astro-original.svg`,
		alt: "Astro",
	},
	{
		src: `${URL}html5/html5-original.svg`,
		alt: "HTML5",
	},
];

export const FrameworkSupports = () => {
	return (
		<section className="relative flex w-full flex-col items-center justify-center gap-8 overflow-visible py-16 text-center md:py-24 lg:gap-8 lg:py-20">
			<div className="col-span-full mx-auto flex max-w-2xl flex-col gap-8 text-center">
				<h2 className="!my-0 text-4xl font-bold xl:text-5xl">
					Works with your favorite language & framework
				</h2>
				<p className="lg:text-lg">
					LuxeyUI provides a consistent developer experience for most
					modern languages and frameworks
				</p>
			</div>
			<div className="flex flex-wrap">
				{techIcons.map((icon, i) => (
					<div
						key={i}
						className="flex size-40 items-center justify-center border-y border-l border-zinc-300 last:border-r dark:border-primary-900"
					>
						<Image
							width={36}
							height={36}
							className={`!my-0 ${i <= 1 ? "dark:invert" : i <= 3 ? "brightness-0 grayscale dark:invert" : i === 4 ? "grayscale" : ""}`}
							alt={icon.alt}
							src={icon.src}
							draggable={false}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

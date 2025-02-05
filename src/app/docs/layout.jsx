import { Sidebar } from "@/layouts";

export const metadata = {
	openGraph: {
		images: [
			{
				url: "/introduction.png",
				width: 1200,
				height: 630,
				alt: "LuxeyUI - Elevate your design effortlessly and quickly",
			},
		],
	},
};
const DocsLayout = ({ children }) => {
	return (
		<>
			{/* <div className="pointer-events-none absolute left-0 z-[-1] hidden h-screen w-[calc(100vw-1.05em)] overflow-hidden dark:block">
				<Spotlight />
			</div> */}
			<section className="grid grid-cols-12">
				<Sidebar />
				{children}
			</section>
		</>
	);
};

export default DocsLayout;

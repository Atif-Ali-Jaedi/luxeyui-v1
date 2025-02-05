"use client";

import { currentVersion } from "@/data/constants";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "../ui/others/Resizable";

export const Preview = ({ code, initialHeight, showHeader }) => {
	const iframe = useRef(null);
	const [containerHeight, setContainerHeight] = useState(
		initialHeight || null,
	);

	const isInView = useInView(iframe);
	const [changed, setChanged] = useState(false);

	useEffect(() => {
		const checkDarkClass = () => {
			const htmlElement = document.documentElement;
			const hasDarkClass = htmlElement.classList.contains("dark");
			setChanged(hasDarkClass);
		};

		if (isInView) checkDarkClass();

		const observer = new MutationObserver(checkDarkClass);

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => {
			observer.disconnect();
		};
	}, [isInView]);

	const iframeContent = `<!DOCTYPE html>
    <html lang="en" class="${changed ? "dark" : "light"}">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@${currentVersion}/dist/index.css"/>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://cdn.jsdelivr.net/npm/luxeyui@${currentVersion}/dist/index.js" defer></script>
      <style>::-webkit-scrollbar { display: none; }</style>
      <script>tailwind.config = { darkMode: 'class' }</script>
    </head>
    <body>
      <div class="px-4 py-2">
        ${code}
      </div>
      <script src="https://unpkg.com/lucide@latest"></script>
      <script>
        lucide.createIcons()
      </script>
    </body>
    </html>`;

	const [iframeSrc, setIframeSrc] = useState("");

	useLayoutEffect(() => {
		if (iframe.current && iframeSrc && initialHeight === undefined) {
			iframe.current.onload = () => {
				const scrollHeight =
					iframe.current.contentWindow.document.body.scrollHeight;

				iframe.current.height = `${scrollHeight}px`;

				if (containerHeight === null) {
					setContainerHeight(scrollHeight);
				}
			};
		}
	}, [iframe, iframeSrc, containerHeight, initialHeight]);

	useEffect(() => {
		if (isInView) setIframeSrc(iframeContent);
		else setIframeSrc("");
	}, [isInView, iframeContent]);

	return (
		<div className="px-1 pb-3">
			{showHeader ? (
				<ResizablePanelGroup direction="horizontal">
					<ResizablePanel defaultSize={100}>
						<header className="bordert flex h-8 items-center gap-2 rounded-t-xl border-x border-zinc-200 bg-zinc-100 px-4 dark:border-zinc-800 dark:bg-zinc-900">
							<div className="size-3 rounded-full bg-red-500"></div>
							<div className="size-3 rounded-full bg-yellow-500"></div>
							<div className="size-3 rounded-full bg-green-500"></div>
						</header>
						<div
							className={cn(
								`not-prose relative flex items-center overflow-hidden overflow-y-hidden rounded-xl border border-zinc-200 px-2 py-4 dark:border-zinc-800`,
								showHeader ? "rounded-t-none border-t-0" : "",
							)}
							tabIndex={0}
							style={{ minHeight: (containerHeight || 0) + 32 }}
						>
							<iframe
								ref={iframe}
								frameBorder="0"
								srcDoc={iframeSrc}
								title="Code snippet preview"
								width="100%"
								sandbox="allow-same-origin allow-scripts"
								height={
									initialHeight
										? `${initialHeight}px`
										: "auto"
								}
							></iframe>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel minSize={2.75}></ResizablePanel>
				</ResizablePanelGroup>
			) : (
				<div
					className={cn(
						`not-prose relative flex items-center overflow-hidden overflow-y-hidden rounded-xl border border-zinc-200 px-2 py-4 dark:border-zinc-800`,
						showHeader ? "rounded-t-none border-t-0" : "",
					)}
					tabIndex={0}
					style={{ minHeight: (containerHeight || 0) + 32 }}
				>
					<iframe
						ref={iframe}
						frameBorder="0"
						srcDoc={iframeSrc}
						title="Code snippet preview"
						width="100%"
						sandbox="allow-same-origin allow-scripts"
						height={initialHeight ? `${initialHeight}px` : "auto"}
					></iframe>
				</div>
			)}
		</div>
	);
};

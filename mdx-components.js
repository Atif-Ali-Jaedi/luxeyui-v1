import {
	Code,
	CodeDemo,
	HighlightedSnippet,
	NoteBlock,
	StyledLink,
} from "@/components";
import { LinkedHeading } from "@/components/docs/LinkedHeading";

export function useMDXComponents(components) {
	return {
		code(props) {
			return props.className ? (
				<HighlightedSnippet
					code={props.children}
					lang={props.className.split("-")[1]}
					{...props}
				/>
			) : (
				<Code>{props.children}</Code>
			);
		},
		Spacer() {
			return (
				<span
					aria-hidden="true"
					className="block h-px w-px"
					style={{ marginLeft: "0.25rem", marginTop: "1rem" }}
				></span>
			);
		},
		CodeDemo({
			lang,
			code,
			showLineNumbers,
			disableCopyBtn,
			file,
			showHeader,
			showExpandCollapseBtn,
			isAdvanced,
			initialHeight,
		}) {
			return (
				<CodeDemo
					lang={lang}
					code={code}
					showLineNumbers={showLineNumbers}
					disableCopyBtn={disableCopyBtn}
					showExpandCollapseBtn={showExpandCollapseBtn}
					file={file}
					showHeader={showHeader}
					initialHeight={initialHeight}
					isAdvanced={isAdvanced}
				/>
			);
		},
		LinkedHeading({ heading, tag }) {
			return <LinkedHeading heading={heading} tag={tag} />;
		},
		h2({ children }) {
			return <LinkedHeading heading={children} tag={"h2"} />;
		},
		h3({ children }) {
			return <LinkedHeading heading={children} tag={"h3"} />;
		},
		h4({ children }) {
			return <LinkedHeading heading={children} tag={"h4"} />;
		},
		blockquote({ children }) {
			return <NoteBlock>{children}</NoteBlock>;
		},
		Link({
			size,
			color,
			underline,
			children,
			isExternal,
			hideAnchorIcon,
			href,
			className,
		}) {
			return (
				<StyledLink
					size={size}
					color={color}
					underline={underline}
					isExternal={isExternal}
					hideAnchorIcon={hideAnchorIcon}
					href={href}
					className={className}
				>
					{children}
				</StyledLink>
			);
		},
		a({ children, href }) {
			return (
				<StyledLink color={"primary"} href={href}>
					{children}
				</StyledLink>
			);
		},
		HL(props) {
			return <strong className="font-medium" {...props} />;
		},
		Chip({ children }) {
			return <div>{children}</div>;
		},
		Version({ children }) {
			return (
				<div className="mb-4 w-max rounded-lg bg-secondary/35 px-5 py-1.5 font-semibold text-secondary">
					<span>v {children}</span>
				</div>
			);
		},
		table(props) {
			return (
				<div className="not-prose overflow-x-auto overflow-y-hidden">
					<table {...props} />
				</div>
			);
		},
		Kbd({ children }) {
			return (
				<kbd className="inline-flex items-center space-x-0.5 rounded-lg bg-zinc-100 px-1.5 py-0.5 text-center font-sans text-sm font-normal text-zinc-600 shadow-sm dark:bg-zinc-800 dark:text-zinc-300">
					{children}
				</kbd>
			);
		},
		...components,
	};
}

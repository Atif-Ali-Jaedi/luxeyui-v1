import { LinkIcon } from "@/assets/icons";
import { StyledLink } from "..";

export const LinkedHeading = ({ heading, tag: Tag = "h3", className }) => {
	return (
		<StyledLink
			href={`#${heading.toLowerCase().replaceAll(" ", "-")}`}
			className={"group block"}
			isLinkedHeading
		>
			<Tag
				id={heading.toLowerCase().replaceAll(" ", "-")}
				className={`${className ? "className" : ""} flex items-center gap-1.5`}
			>
				{heading}
				<LinkIcon
					className="opacity-0 transition-all duration-300 group-hover:opacity-100"
					width={Tag === "h3" ? 20 : Tag === "h4" ? 16 : 24}
				/>
			</Tag>
		</StyledLink>
	);
};

import { Accordion, AccordionItem, StyledLink } from "@/components";
import { ScrollArea } from "@/components/ui/others/ScrollArea";
import { components, defaultSidebarLinks } from "@/data/constants";

export const Sidebar = () => (
	<aside className="relative mt-8 hidden h-[calc(100dvh-167px)] pr-4 lg:col-span-2 lg:block">
		<div className="fixed w-[205px] xl:w-64">
			<ScrollArea className="h-[calc(100dvh-167px)] pr-4">
				<Accordion>
					{Object.entries(defaultSidebarLinks).map(([key, value]) => (
						<AccordionItem
							key={key}
							heading={key
								.split(" ")
								.map(
									word =>
										word[0].toUpperCase() + word.slice(1),
								)
								.join(" ")}
							expanded
							hasLine
						>
							<ul className="not-prose flex flex-col gap-1 py-2 pl-7">
								{value.map((element, i) => (
									<li key={i} className="!m-0 list-none">
										<StyledLink
											href={element.link}
											className="text-zinc-500 transition-opacity duration-300 dark:text-zinc-400"
										>
											{element.name}
											{element.updated && (
												<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-zinc-100/50 px-1 py-1 text-xs text-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-500">
													<span className="flex-1 px-1 font-normal text-inherit">
														Updated
													</span>
												</div>
											)}
											{element.new && (
												<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-primary-500/20 px-1 py-1 text-xs text-primary-700 dark:text-primary-200">
													<span className="flex-1 px-1 font-normal text-inherit">
														New
													</span>
												</div>
											)}
										</StyledLink>
									</li>
								))}
							</ul>
						</AccordionItem>
					))}
					<AccordionItem heading="Components" expanded hasLine>
						<ul className="not-prose flex flex-col gap-1 py-2 pl-7">
							{Object.entries(components).map(([key, value]) => (
								<li key={key} className="!m-0 list-none">
									<StyledLink
										href={value.link}
										className="text-zinc-500 dark:text-zinc-400"
									>
										{value.name}
										{value.updated && (
											<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-zinc-100/50 px-1 py-1 text-xs text-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-500">
												<span className="flex-1 px-1 font-normal text-inherit">
													Updated
												</span>
											</div>
										)}
										{value.new && (
											<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-primary-500/20 px-1 py-1 text-xs text-primary-700 dark:text-primary-200">
												<span className="flex-1 px-1 font-normal text-inherit">
													New
												</span>
											</div>
										)}
										{value.comingSoon && (
											<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-secondary/20 px-1 py-1 text-xs text-secondary">
												<span className="flex-1 px-1 font-normal text-inherit">
													Coming soon
												</span>
											</div>
										)}
									</StyledLink>
								</li>
							))}
						</ul>
					</AccordionItem>
				</Accordion>
			</ScrollArea>
		</div>
	</aside>
);

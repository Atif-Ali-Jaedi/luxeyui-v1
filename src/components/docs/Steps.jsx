import { LinkedHeading } from "./LinkedHeading";

const Step = ({ children, heading }) => {
	return (
		<div className="relative pb-px [counter-increment:step] before:absolute before:left-[-2.625rem] before:grid before:size-7 before:place-items-center before:rounded-full before:bg-zinc-100 before:font-medium before:content-[counter(step)] dark:before:bg-zinc-800">
			<LinkedHeading className="!text-lg" heading={heading} tag="h3" />
			{children}
		</div>
	);
};

const Steps = ({ children }) => (
	<div className="relative mb-12 ml-4 border-l border-zinc-100 pl-[1.625rem] [counter-reset:step] dark:border-zinc-800">
		{children}
	</div>
);

export { Step, Steps };

const currentVersion = "0.6.3";
const navLinks = [
	{
		href: "/docs/introduction",
		label: "Docs",
	},
	{
		href: "/docs/components/accordion",
		label: "Components",
	},
	{
		href: "/blog",
		label: "Blog",
	},
	{
		href: "/changelog",
		label: `Changelog`,
	},
];

const defaultSidebarLinks = {
	guide: [
		{ link: "/docs/introduction", name: "Introduction" },
		{
			link: "/docs/guide/installation",
			name: "Installation",
		},
		{ link: "/docs/guide/typography", name: "Typography" },
	],

	customization: [
		{ link: "/docs/customization/theme", name: "Theme" },
		{ link: "/docs/customization/dark-mode", name: "Dark Mode" },
		{
			link: "/docs/customization/override-styles",
			name: "Override Styles",
		},
		{
			link: "/docs/customization/custom-variants",
			name: "Custom Variants",
		},
	],
};

const components = [
	"Accordion",
	"Avatar",
	"Badge",
	"Button",
	"Card",
	"Checkbox",
	"Checkbox Group",
	"Chip",
	"Circular Progress",
	"Code",
	"Divider",
	"Image",
	"Input",
	"Kbd",
	"Link",
	"Progress",
	"Radio Group",
	"Skeleton",
	"Scroll Shadow",
	"Spinner",
	"Switch",
	"Textarea",
	"User",
	"Drawer",
	"Alert",
	"Modal",
]
	.sort()
	.reduce((acc, component) => {
		acc[
			component
				.split(" ")
				.map((word, i) =>
					i === 0
						? word.toLowerCase()
						: word.charAt(0).toUpperCase() +
							word.slice(1).toLowerCase(),
				)
				.join("")
		] = {
			name: component
				.split(" ")
				.map(word => {
					return word[0].toUpperCase() + word.substring(1);
				})
				.join(" "),
			link: `/docs/components/${component.toLowerCase().replace(" ", "-")}`,
		};
		return acc;
	}, {});

components.alert.new = true;
components.drawer.new = true;
components.modal.new = true;
components.badge.updated = true;

components.input.comingSoon = true;
components.textarea.comingSoon = true;

const sidebarLinks = [
	...defaultSidebarLinks.guide,
	...defaultSidebarLinks.customization,
	...Object.values(components),
];

export {
	components,
	currentVersion,
	defaultSidebarLinks,
	navLinks,
	sidebarLinks,
};

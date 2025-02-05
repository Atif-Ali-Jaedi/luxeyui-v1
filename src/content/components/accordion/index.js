import { bordered } from "./bordered";
import { compact } from "./compact";
import { customIndicator } from "./customIndicator";
import { customStyles } from "./customStyles";
import { defaultExpandedItems } from "./defaultExpandedItems";
import { disabledItems } from "./disabledItems";
import { expandSingleItems } from "./expandSingleItems";
import { light } from "./light";
import { shadow } from "./shadow";
import { splitted } from "./splitted";
import { startContent } from "./startContent";
import { usage } from "./usage";
import { withSubtitle } from "./withSubtitle";

export const accordionContent = {
	usage: usage,
	withSubtitle: withSubtitle,
	expandSingleItems: expandSingleItems,
	compact: compact,
	variants: {
		light: light,
		bordered: bordered,
		shadow: shadow,
		splitted: splitted,
	},
	defaultExpandedItems: defaultExpandedItems,
	disabledItems: disabledItems,
	startContent: startContent,
	customIndicator: customIndicator,
	customStyles: customStyles,
};

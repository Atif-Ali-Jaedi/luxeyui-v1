import { checkboxIcon } from "./checkbox-icon";

export const lineThrough = `<label for="checkbox" class="checkbox primary" data-line-through>
    <span>
        <input checked type="checkbox" id="checkbox" class="checkbox" /> 
    </span>
	<div class="icon-wrapper">
		${checkboxIcon}
	</div>
	<span class="checkbox-label">Option</span>
</label>`;

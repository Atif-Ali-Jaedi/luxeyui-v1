import { checkboxIcon } from "./checkbox-icon";

export const sizes = `<div class="flex gap-4">
    <label for="checkbox" class="checkbox primary size-sm">
        <span>
            <input checked type="checkbox" id="checkbox" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Small</span>
    </label>
    <label for="checkbox2" class="checkbox primary size-md">
        <span>
            <input checked type="checkbox" id="checkbox2" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Medium</span>
    </label>
    <label for="checkbox3" class="checkbox primary ize-lg">
        <span>
            <input checked type="checkbox" id="checkbox3" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Large</span>
    </label>
</div>`;

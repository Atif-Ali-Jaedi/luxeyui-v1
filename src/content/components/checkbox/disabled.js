import { checkboxIcon } from "./checkbox-icon";

export const disabled = `<div class="flex gap-4">
    <label for="checkbox" class="checkbox primary" data-disabled>
        <span>
            <input type="checkbox" id="checkbox" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Option</span>
    </label>
    <label for="checkbox" class="checkbox primary" data-disabled>
        <span>
            <input checked type="checkbox" id="checkbox" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Option</span>
    </label>
</div>`;

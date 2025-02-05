import { checkboxIcon } from "./checkbox-icon";

export const radius = `<div class="flex gap-4">
    <label for="checkbox" class="checkbox primary radius-none">
        <span>
            <input checked type="checkbox" id="checkbox" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">None</span>
    </label>
    <label for="checkbox2" class="checkbox primary radius-sm">
        <span>
            <input checked type="checkbox" id="checkbox2" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Small</span>
    </label>
    <label for="checkbox3" class="checkbox primary radius-md">
        <span>
            <input checked type="checkbox" id="checkbox3" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Medium</span>
    </label>
    <label for="checkbox4" class="checkbox primary radius-lg">
        <span>
            <input checked type="checkbox" id="checkbox4" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Large</span>
    </label>
    <label for="checkbox5" class="checkbox primary radius-full">
        <span>
            <input checked type="checkbox" id="checkbox5" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Full</span>
    </label>
</div>`;

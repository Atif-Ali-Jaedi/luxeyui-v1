import { checkboxIcon } from "./checkbox-icon";

export const colors = `<div class="flex gap-4">
    <label for="checkbox" class="checkbox default">
        <span>
            <input checked type="checkbox" id="checkbox" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Default</span>
    </label>
    <label for="checkbox2" class="checkbox foreground">
        <span>
            <input checked type="checkbox" id="checkbox2" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Foreground</span>
    </label>
    <label for="checkbox3" class="checkbox primary">
        <span>
            <input checked type="checkbox" id="checkbox3" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Primary</span>
    </label>
    <label for="checkbox4" class="checkbox secondary">
        <span>
            <input checked type="checkbox" id="checkbox4" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Secondary</span>
    </label>
    <label for="checkbox5" class="checkbox success">
        <span>
            <input checked type="checkbox" id="checkbox5" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Success</span>
    </label>
    <label for="checkbox6" class="checkbox warning">
        <span>
            <input checked type="checkbox" id="checkbox6" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Warning</span>
    </label>
    <label for="checkbox7" class="checkbox danger">
        <span>
            <input checked type="checkbox" id="checkbox7" class="checkbox" /> 
        </span>
        <div class="icon-wrapper">
            ${checkboxIcon}
        </div>
        <span class="checkbox-label">Danger</span>
    </label>
</div>`;

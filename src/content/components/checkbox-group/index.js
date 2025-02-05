import { checkboxIcon } from "../checkbox/checkbox-icon";

const checkbox = (
	label,
	checked,
	variant,
) => `<label class="checkbox ${variant || "primary"}">
            <span>
                <input ${checked ? "checked" : null} type="checkbox" class="checkbox" /> 
            </span>
            <div class="icon-wrapper">
                ${checkboxIcon}
            </div>
            <span class="checkbox-label">${label || "Option"}</span>
        </label>`;

export const checkboxGroupContent = {
	usage: `<div class="checkbox-group">
    <label class="group-label">Select cities</label>
    <div class="checkbox-wrapper">
        ${checkbox("Buenos Aires", true)}
        ${checkbox("Sydney")}
        ${checkbox("San Fransisco")}
        ${checkbox("London", true)}
        ${checkbox("Tokyo")}
    </div>
</div>`,
	disabled: `<div class="checkbox-group" data-disabled>
    <label class="group-label">Select cities</label>
    <div class="checkbox-wrapper">
        ${checkbox("Buenos Aires", true)}
        ${checkbox("Sydney")}
        ${checkbox("San Fransisco")}
        ${checkbox("London", true)}
        ${checkbox("Tokyo")}
    </div>
</div>`,
	horizontal: `<div class="checkbox-group" data-orientation="horizontal">
    <label class="group-label">Select cities</label>
    <div class="checkbox-wrapper">
        ${checkbox("Buenos Aires", true, "secondary")}
        ${checkbox("Sydney", false, "secondary")}
        ${checkbox("San Fransisco", false, "secondary")}
        ${checkbox("London", true, "secondary")}
        ${checkbox("Tokyo", false, "secondary")}
    </div>
</div>`,
	invalid: `<div class="checkbox-group" data-required>
    <label class="group-label">Select cities</label>
    <div class="checkbox-wrapper">
        ${checkbox("Buenos Aires", true)}
        ${checkbox("Sydney", false, "primary")}
        ${checkbox("San Fransisco", false)}
        ${checkbox("London", true)}
        ${checkbox("Tokyo", false)}
    </div>
    <span class="description">Select the cities you want to visit</span>
</div>
<script>
    const checkboxes = document.querySelectorAll(
        ".checkbox input[type='checkbox']",
    );
    checkboxes.forEach(checkbox =>
        checkbox.addEventListener(
            "change",
            () =>
                (document.querySelector(".checkbox-group").dataset.invalid =
                    !Array.prototype.some.call(
                        checkboxes,
                        checkbox => checkbox.checked,
                    )),
        ),
    );
</script>`,
	customStyles: `<div class="checkbox-group">
    <label class="group-label">Select employees</label>
    <div class="checkbox-wrapper mt-2 !gap-6">
       <label class="checkbox primary inline-flex w-full max-w-md bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent [&:has(input[type='checkbox']:checked)]:border-[hsl(var(--base-primary))]">
            <span>
                <input type="checkbox" class="checkbox" /> 
            </span>
            <div class="icon-wrapper">
                ${checkboxIcon}
            </div>
            <div class="checkbox-label w-full">
                <div class="w-full flex justify-between gap-2">
                    <div class="user">
                        <div class="avatar">
                            <img src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
                        </div>
                        <div class="user-info">
                            <span class="name">Eliana Jimenez</span>
                            <small class="description">
                                <a class="link primary">@eliana_jimenez</a>
                            </small>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <span class="text-xs text-[hsl(var(--default-500))]">Software Engineer</span>
                        <div class="chip size-sm flat secondary">
                            <span class="content">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </label>
       <label class="checkbox primary inline-flex w-full max-w-md bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent [&:has(input[type='checkbox']:checked)]:border-[hsl(var(--base-primary))]">
            <span>
                <input type="checkbox" class="checkbox" /> 
            </span>
            <div class="icon-wrapper">
                ${checkboxIcon}
            </div>
            <div class="checkbox-label w-full">
                <div class="w-full flex justify-between gap-2">
                    <div class="user">
                        <div class="avatar">
                            <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
                        </div>
                        <div class="user-info">
                            <span class="name">Ava Kate</span>
                            <small class="description">
                                <a class="link primary">@ava_kate</a>
                            </small>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <span class="text-xs text-[hsl(var(--default-500))]">Product Designer</span>
                        <div class="chip size-sm flat warning">
                            <span class="content">Vacation</span>
                        </div>
                    </div>
                </div>
            </div>
        </label>
       <label class="checkbox primary inline-flex w-full max-w-md bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent [&:has(input[type='checkbox']:checked)]:border-[hsl(var(--base-primary))]">
            <span>
                <input type="checkbox" class="checkbox" /> 
            </span>
            <div class="icon-wrapper">
                ${checkboxIcon}
            </div>
            <div class="checkbox-label w-full">
                <div class="w-full flex justify-between gap-2">
                    <div class="user">
                        <div class="avatar">
                            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
                        </div>
                        <div class="user-info">
                            <span class="name">Jack David</span>
                            <small class="description">
                                <a class="link primary">@jack_david</a>
                            </small>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <span class="text-xs text-[hsl(var(--default-500))]">Technical Writer</span>
                        <div class="chip size-sm flat danger">
                            <span class="content">Out of office</span>
                        </div>
                    </div>
                </div>
            </div>
        </label>
       <label class="checkbox primary inline-flex w-full max-w-md bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent [&:has(input[type='checkbox']:checked)]:border-[hsl(var(--base-primary))]">
            <span>
                <input type="checkbox" class="checkbox" /> 
            </span>
            <div class="icon-wrapper">
                ${checkboxIcon}
            </div>
            <div class="checkbox-label w-full">
                <div class="w-full flex justify-between gap-2">
                    <div class="user">
                        <div class="avatar">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
                        </div>
                        <div class="user-info">
                            <span class="name">John Dale</span>
                            <small class="description">
                                <a class="link primary">@john_dale</a>
                            </small>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <span class="text-xs text-[hsl(var(--default-500))]">Sales Manager</span>
                        <div class="chip size-sm flat secondary">
                            <span class="content">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>`,
};

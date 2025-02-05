import { checkboxIcon } from "./checkbox-icon";

export const customStyles = `<label for="checkbox" class="checkbox primary inline-flex w-full max-w-md bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent [&:has(input[type='checkbox']:checked)]:border-[hsl(var(--base-primary))]">
    <span>
        <input checked type="checkbox" id="checkbox" class="checkbox" /> 
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
                <div class="chip size-sm flat success">
                    <span class="content">Active</span>
                </div>
            </div>
        </div>
    </div>
</label>`;

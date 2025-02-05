import { defaultContent } from "./commonThings";

export const customStyles = `<div class="accordion [&_hr]:hidden shadow !p-2 flex flex-col gap-1 w-full max-w-[300px]">
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger px-2 !py-0 hover:bg-[hsl(var(--default-100))] rounded-lg !h-14 flex items-center">
                <div class="start-content text-[hsl(var(--base-primary))]"><i data-lucide="monitor-smartphone"></i></div>
                <div class="title-wrapper">
                    <h3 class="title !font-normal !text-base">Connected devices</h3>
                    <p class="subtitle flex">2 issues to<span class="text-[hsl(var(--base-primary))] ml-1">fix now</span></p>
                </div>
                <span class="indicator">
                    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </span>
            </button>
        </div>
        <section>
            <div class="content px-2 text-sm dark:text-white">
                ${defaultContent}        
            </div>
        </section>
    </div>
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger px-2 !py-0 hover:bg-[hsl(var(--default-100))] rounded-lg !h-14 flex items-center">
                <div class="start-content text-[hsl(var(--base-foreground))]"><i data-lucide="shield-alert"></i></div>
                <div class="title-wrapper">
                    <h3 class="title !font-normal !text-base">App Permissions</h3>
                    <span class="subtitle">3 apps have read permissions</span>
                </div>
                <span class="indicator">
                    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </span>
            </button>
        </div>
        <section>
            <div class="content px-2 text-sm dark:text-white">
                ${defaultContent}
            </div>
        </section>
    </div>
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger px-2 !py-0 hover:bg-[hsl(var(--default-100))] rounded-lg !h-14 flex items-center">
                <div class="start-content text-[hsl(var(--base-warning))]"><i data-lucide="info"></i></div>
                <div class="title-wrapper">
                    <h3 class="title !font-normal !text-base">Pending tasks</h3>
                    <span class="subtitle !text-[hsl(var(--base-warning))]">Complete your profile</span>
                </div>
                <span class="indicator">
                    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </span>
            </button>
        </div>
        <section>
            <div class="content px-2 text-sm dark:text-white">
                ${defaultContent}
            </div>
        </section>
    </div>
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger px-2 !py-0 hover:bg-[hsl(var(--default-100))] rounded-lg !h-14 flex items-center">
                <div class="start-content text-[hsl(var(--base-danger))]"><i data-lucide="monitor-smartphone"></i></div>
                <div class="title-wrapper">
                    <h3 class="title !font-normal !text-base">
                        <p class="flex gap-1 items-center">Card expired <span class="text-[hsl(var(--default-400))] text-sm">*4812</span></p>
                    </h3>
                    <span class="subtitle !text-[hsl(var(--base-danger))]">Please, update now</span>
                </div>
                <span class="indicator">
                    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </span>
            </button>
        </div>
        <section>
            <div class="content px-2 text-sm dark:text-white">
                ${defaultContent}
            </div>
        </section>
    </div>
</div>`;

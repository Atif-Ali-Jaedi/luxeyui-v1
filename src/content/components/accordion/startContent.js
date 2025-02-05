import { defaultContent } from "./commonThings";

export const startContent = `<div class="accordion">
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger">
                <div class="start-content">
                    <div class="avatar radius-lg primary" data-bordered>
                        <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
                <div class="title-wrapper">
                    <h3 class="title">Ava Kate</h3>
                    <span class="subtitle">4 unread messages</span>
                </div>
                <span class="indicator">
                    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </span>
            </button>
        </div>
        <section>
            <div class="content dark:text-white">
                ${defaultContent}
            </div>
        </section>
    </div>
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger">
                <div class="start-content">
                    <div class="avatar radius-lg success" data-bordered>
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
                <div class="title-wrapper">
                    <h3 class="title">Jack David</h3>
                    <span class="subtitle">3 incompleted steps</span>
                </div>
                <span class="indicator">
                    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </span>
            </button>
        </div>
        <section>
            <div class="content dark:text-white">
                ${defaultContent}
            </div>
        </section>
    </div>
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger">
                <div class="start-content">
                    <div class="avatar radius-lg warning" data-bordered>
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
                <div class="title-wrapper">
                    <h3 class="title">John Dale</h3>
                    <p class="subtitle flex">2 issues to<span class="text-[hsl(var(--base-primary))] ml-1">fix now</span></p>
                </div>
                <span class="indicator">
                    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </span>
            </button>
        </div>
        <section>
            <div class="content dark:text-white">
                ${defaultContent}
            </div>
        </section>
    </div>
</div>`;

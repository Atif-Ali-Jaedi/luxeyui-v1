import { defaultContent } from "./commonThings";

export const defaultExpandedItems = `<div class="accordion">
    <div class="accordion-item" data-open="true">
        <div class="heading">
            <button class="trigger">
                <div class="title-wrapper">
                    <h3 class="title">Accordion 1</h3>
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
                <div class="title-wrapper">
                    <h3 class="title">Accordion 2</h3>
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
                <div class="title-wrapper">
                    <h3 class="title">Accordion 3</h3>
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

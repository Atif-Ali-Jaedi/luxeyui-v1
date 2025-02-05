import { defaultContent } from "./commonThings";

export const customIndicator = `<div class="accordion">
    <div class="accordion-item">
        <div class="heading">
            <button class="trigger">
                <div class="title-wrapper">
                    <h3 class="title">Anchor</h3>
                </div>
                <span class="indicator"><i data-lucide="link"></i></span>
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
                    <h3 class="title">Moon</h3>
                </div>
                <span class="indicator"><i data-lucide="moon"></i></span>
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
                    <h3 class="title">Sun</h3>
                </div>
                <span class="indicator"><i data-lucide="sun"></i></span>
            </button>
        </div>
        <section>
            <div class="content dark:text-white">
                ${defaultContent}
            </div>
        </section>
    </div>
</div>`;

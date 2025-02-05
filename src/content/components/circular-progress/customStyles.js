export const customStyles = `<div class="card w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
    <div class="card-body !justify-center !items-center pb-0 !pt-6">
        <div class="circular-progress" data-value="70%">
            <div class="svg-wrapper">
                <svg class="progress !size-36 drop-shadow-md" viewBox="0 0 32 32" fill="none" stroke-width="4">
                    <circle class="track !stroke-white/10" cx="16" cy="16" r="13" role="presentation" stroke-dasharray="81.68140899333463" stroke-dashoffset="0" transform="rotate(-90 16 16)" stroke-linecap="round"></circle>
                    <circle class="indicator !stroke-white" cx="16" cy="16" r="13" role="presentation" stroke-dasharray="81.68140899333463" stroke-dashoffset="81.68140899333463" transform="rotate(-90 16 16)" stroke-linecap="round"></circle>
                </svg>
                <span class="value !text-3xl !font-semibold !text-white"></span>
            </div>
        </div>
    </div>
    <div class="card-footer justify-center items-center pt-0 !bg-transparent">
        <div class="chip bordered !border-px !border-white/30">
            <span class="content !text-white/90 text-sm !font-semibold">
                2800 Data points
            </span>
        </div>
    </div>
</div>`;

export const customStyles = `<div class="modal-container h-[calc(100vh-16px)]">
    <button class="button secondary toggle-modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Open Modal</button>
    <div class="backdrop !bg-[#292f46]/50 backdrop-opacity-40"></div>
    <div class="modal-wrapper">
        <section class="modal border-[#292f46] !bg-[#19172c] dark:!bg-[#19172c] !text-[#a8b0d3]">
            <button class="close-button hover:!bg-white/5 active:!bg-white/10"></button>
            <header class="modal-header border-b-[1px] border-[#292f46]">Modal Title</header>
            <div class="modal-body !py-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
            </div>
            <footer class="modal-footer border-t-[1px] border-[#292f46]">
                <button data-close-modal class="button foreground !bg-transparent !text-inherit">Close</button>
                <button data-close-modal class="button shadow-lg shadow-indigo-500/20 !bg-[#6f4ef2]">Action</button>
            </footer>
        </section>
    </div>
</div>`;

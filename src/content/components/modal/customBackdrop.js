export const customBackdrop = `<div class="modal-container h-[calc(100vh-16px)]">
    <button class="button toggle-modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Open Modal</button>
    <div class="backdrop bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"></div>
    <div class="modal-wrapper">
        <section class="modal">
            <button class="close-button"></button>
            <header class="modal-header">Modal Title</header>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
            </div>
            <footer class="modal-footer">
                <button data-close-modal class="button light danger">Close</button>
                <button data-close-modal class="button primary">Action</button>
            </footer>
        </section>
    </div>
</div>`;

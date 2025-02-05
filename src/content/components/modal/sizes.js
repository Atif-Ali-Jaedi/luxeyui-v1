export const sizes = `<div id="container" class="flex flex-wrap gap-3"></div>
<script>
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];

    sizes.forEach(size => {
        const modalContainer = document.createElement("div");
        modalContainer.className = \`modal-container size-\${size === "full" ? "full-screen" : size}\`;
        modalContainer.innerHTML = \`<button class="button toggle-modal">Open \${size}</button>
<div class="backdrop"></div>
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
</div>\`;
        document.getElementById("container").appendChild(modalContainer);
    });
</script>`;

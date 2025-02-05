export const backdrop = `<div id="container" class="flex flex-wrap gap-3"></div>
<script>
    const backdrops = ["opaque", "blurred", "transparent"];

    backdrops.forEach(backdrop => {
        const drawerContainer = document.createElement("div");
        drawerContainer.className = \`drawer-container backdrop-\${backdrop}\`;
        drawerContainer.innerHTML = \`<button class="button toggle-drawer capitalize primary flat">\${backdrop}</button>
<div class="backdrop"></div>
<div class="drawer-wrapper">
    <section class="drawer">
        <button class="close-button"></button>
        <header class="drawer-header">Drawer Title</header>
        <div class="drawer-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
        </div>
        <footer class="drawer-footer">
            <button data-close-drawer class="button light danger">Close</button>
            <button data-close-drawer class="button primary">Action</button>
        </footer>
    </section>
</div>\`;
        document.getElementById("container").appendChild(drawerContainer);
    });
</script>`;

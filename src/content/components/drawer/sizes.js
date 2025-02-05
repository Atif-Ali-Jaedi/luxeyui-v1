export const sizes = `<div id="container" class="flex flex-wrap gap-3"></div>
<script>
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];

    sizes.forEach(size => {
        const drawerContainer = document.createElement("div");
        drawerContainer.className = \`drawer-container size-\${size === "full" ? "full-screen" : size}\`;
        drawerContainer.innerHTML = \`<button class="button toggle-drawer">Open \${size}</button>
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

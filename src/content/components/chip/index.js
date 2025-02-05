export const chipContent = {
	usage: `<div class="chip">
    <div class="content">Chip</div>
</div>`,
	disabled: `<div class="chip primary" data-disabled>
    <div class="content">Disabled</div>
</div>`,
	sizes: `<div class="flex items-center gap-4">
    <div class="chip size-sm">
        <div class="content">Small</div>
    </div>
    <div class="chip size-md">
        <div class="content">Medium</div>
    </div>
    <div class="chip size-lg">
        <div class="content">Large</div>
    </div>  
</div>`,
	colors: `<div class="flex items-center gap-4">
    <div class="chip default">
        <div class="content">Default</div>
    </div>
    <div class="chip foreground">
        <div class="content">Foreground</div>
    </div>
    <div class="chip primary">
        <div class="content">Primary</div>
    </div>  
    <div class="chip secondary">
        <div class="content">Secondary</div>
    </div>  
    <div class="chip success">
        <div class="content">Success</div>
    </div>  
    <div class="chip warning">
        <div class="content">Warning</div>
    </div>  
    <div class="chip danger">
        <div class="content">Danger</div>
    </div>  
</div>`,
	radius: `<div class="flex items-center gap-4">
    <div class="chip radius-sm">
        <div class="content">Small</div>
    </div>
    <div class="chip radius-md">
        <div class="content">Medium</div>
    </div>
    <div class="chip radius-lg">
        <div class="content">Large</div>
    </div>  
    <div class="chip radius-full">
        <div class="content">Full</div>
    </div>
</div>`,
	variants: `<div class="flex items-center gap-4">
    <div class="chip warning solid">
        <div class="content">Solid</div>
    </div>
    <div class="chip warning bordered">
        <div class="content">Bordered</div>
    </div>
    <div class="chip warning light">
        <div class="content">Light</div>
    </div>
    <div class="chip warning flat">
        <div class="content">Flat</div>
    </div>
    <div class="chip warning faded">
        <div class="content">Faded</div>
    </div>
    <div class="chip warning shadow">
        <div class="content">Shadow</div>
    </div>
    <div class="chip warning dot">
        <div class="dot"></div>
        <div class="content">Dot</div>
    </div>
</div>`,
	startAndEndContent: `<div class="flex gap-4">
    <div class="chip success faded">
        <i data-lucide="circle-check" width="18" height="18" fill="currentColor" class="[&_path]:stroke-black"></i>
        <div class="content">Chip</div>
    </div>
    <div class="chip secondary flat">
        <div class="content">Chip</div>
        <i data-lucide="bell" width="18" height="18" fill="currentColor"></i>
    </div>
</div>`,
	withCloseButton: `<div class="flex gap-4">
    <div class="chip">
        <div class="content">Chip</div>
        <button class="close-button"></button>
    </div>
    <div class="chip bordered">
        <div class="content">Chip</div>
        <button class="close-button"></button>
    </div>
</div>`,
	withAvatar: `<div class="flex gap-4">
    <div class="chip flat">
        <div class="avatar">
            <img src="https://i.pravatar.cc/150?img=11" alt="Avatar">
        </div>
        <div class="content">Avatar</div>
    </div>
    <div class="chip flat">
        <div class="avatar size-sm" data-show-fallback="true">
            <img alt="J">
        </div>
        <div class="content">Avatar</div>
    </div>
</div>`,
	listOfChips: `<div id="container" class="flex items-center gap-4"></div>
<script>
    const fruits = ["Apple", "Banana", "Cherry", "Watermelon", "Orange"];
    const container = document.querySelector("#container");

    const addFruits = () => {
        container.innerHTML = '';
        fruits.forEach(fruit => {
            const chip = document.createElement("div");
            chip.className = "chip flat";
            chip.innerHTML = \`<span class="content">\${fruit}</span>\`;

            const closeButton = document.createElement("button");
            closeButton.className = "close-button";
            closeButton.innerHTML = \`<svg aria-hidden="true" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em"><path d="M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z" fill="currentColor"></path></svg>\`

            closeButton.addEventListener("click", () => {
                chip.remove();
                if (container.children.length === 0) addFruits();
            });

            chip.appendChild(closeButton);
            container.appendChild(chip);
        });
    }
    addFruits();
</script>
`,
	customStyles: `<div class="chip m-2 shadow bg-gradient-to-br from-indigo-500 to-pink-500 border-px border-white/50 !shadow-pink-500/30">
    <div class="content drop-shadow shadow-black !text-white">Chip</div>
</div>`,
};

export const colors = `<div class="flex items-center justify-center w-full">
    <div id="container" class="flex flex-col w-full"></div>
</div>
<script>
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
    const container = document.querySelector("#container");
    
    colors.forEach(color => {
        const holder = document.createElement("div");
        holder.className = "w-ful flex items-center my-3";
        holder.innerHTML = \`<div class="alert flat \${color}">
    <div class="icon-wrapper"></div>
    <div class="main-wrapper">
        <div class="title">This is a \${color} alert</div>
    </div>
</div>\`;
        container.appendChild(holder);
    });
</script>`
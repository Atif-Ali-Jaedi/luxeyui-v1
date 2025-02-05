export const radius = `<div class="flex items-center justify-center w-full">
    <div id="container" class="flex flex-col w-full"></div>
</div>
<script>
    const radiuses = ["none", "sm", "md", "lg", "full"];
    const container = document.querySelector("#container");
    
    radiuses.forEach(radius => {
        const holder = document.createElement("div");
        holder.className = "w-ful flex items-center my-3";
        holder.innerHTML = \`<div class="alert flat radius-\${radius}">
    <div class="icon-wrapper"></div>
    <div class="main-wrapper">
        <div class="title">This is a \${radius} radius alert</div>
    </div>
</div>\`;
        container.appendChild(holder);
    });
</script>`
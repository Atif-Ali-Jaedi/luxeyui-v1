export const customStyles = `<div class="flex flex-col w-full gap-y-6" id="container"></div>
<script>
    const colors = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
    ];

    colors.forEach(color => {
        const alert = document.createElement("div");

        alert.className = \`alert faded !bg-[hsl(var(--default-50))] dark:!bg-[hsl(var(--layout-background))] shadow-sm !border !border-[hsl(var(--default-200))] dark:!border-[hsl(var(--default-100))] relative before:content-[''] before:absolute before:z-10 before:left-0 before:top-[-1px] before:bottom-[-1px] before:w-1 rounded-l-none border-l-none \${color} \${
            color == "default"
                ? "before:bg-[hsl(var(--default-300))]"
                : color == "primary"
                    ? "before:bg-[hsl(var(--base-primary))]"
                    : color == "secondary"
                        ? "before:bg-[hsl(var(--base-secondary))]"
                        : color == "success"
                            ? "before:bg-[hsl(var(--base-success))]"
                            : color == "warning"
                                ? "before:bg-[hsl(var(--base-warning))]"
                                : color == "danger"
                                    ? "before:bg-[hsl(var(--base-danger))]"
                                    : "before:bg-[hsl(var(--default-200))]"
        }\`;

        alert.innerHTML = \`
        <div class="icon-wrapper dark:!bg-transparent"></div>
        <div class="main-wrapper !pt-1">
        <div class="title">The documents you requested are ready to be viewed</div>
            <div class="flex items-center gap-1 mt-3">
                <button
                    class="button !bg-[hsl(var(--layout-background))] text-[hsl(var(--default-700))] font-medium !border [box-shadow:var(--box-shadow-small)] size-sm bordered"
                >
                    View documents
                </button>
                <button
                    class="button text-[hsl(var(--default-500))] font-medium underline underline-offset-4 size-sm light"
                >
                    Maybe later
                </button>
            </div>
        </div>\`;

        document.querySelector("#container").appendChild(alert);
    });
</script>`;

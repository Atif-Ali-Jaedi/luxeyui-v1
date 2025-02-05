export const modalPlacement = `<div class="flex flex-col gap-2 items-center justify-center h-[calc(100vh-16px)]">
    <div class="modal-container">
        <button class="button toggle-modal">Open Modal</button>
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
        </div>
    </div>
    <div class="radio-group" data-orientation="horizontal">
        <label class="group-label">Select modal placement</label>
        <div class="radio-wrapper"></div>
    </div>
</div>
<script>
    const placements = [
        "auto",
        "top",
        "bottom",
        "center",
        "top-center",
        "bottom-center",
    ];

    placements.forEach(placement => {
        const radio = document.createElement("label");
        radio.className = \`radio primary\`;
        radio.innerHTML = \`<span><input type="radio" value="\${placement}" name="placement" \${placement === "auto" ? "checked" : ""}/></span>
            <div class="point-wrapper"><div class="point"></div></div>
            <span class="label-wrapper"><span class="label">\${placement}</span></span>\`;
        document.querySelector(".radio-wrapper").appendChild(radio);
    });

    document
        .querySelectorAll(".radio input[type=radio]")
        .forEach(radio =>
            radio.addEventListener(
                "change",
                e =>
                    (document.querySelector(".modal-container").className =
                        \`modal-container \${e.target.value}\`),
            ),
        );
</script>`;

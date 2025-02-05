const script = (
	color,
	setDefaultValue,
	setDescription,
	setInvalid,
) => `const cities = [
        { name: "Buenos Aires", description: "The capital of Argentina" },
        { name: "Sydney", description: "The capital of Australia" },
        { name: "San Francisco", description: "The city of Silicon Valley", ${setDefaultValue ? "checked: true" : ""}},
        { name: "London", description: "The capital of England", },
        { name: "Tokyo", description: "The capital of Japan" },
    ]

    cities.forEach(city => {
        const radio = document.createElement("label");
        radio.className = \`${color ? `radio ${color}` : "radio"}\`;
        radio.innerHTML = \`<span><input type="radio" name="city" ${setDefaultValue ? "${city.checked ? 'checked' : ''}" : ""}/></span>
            <div class="point-wrapper"><div class="point"></div></div>
            <span class="label-wrapper"><span class="label">\${city.name}</span>${setDescription ? `<span class="description">\${city.description}</span>` : ""}</span>\`;
        document.querySelector(".radio-wrapper").appendChild(radio);
    })
    ${
		setInvalid
			? `const radioButtons = document.querySelectorAll(".radio input[type='radio']");
    radioButtons.forEach(radio =>
        radio.addEventListener(
            "change",
            () =>
                (document.querySelector(".radio-group").dataset.invalid =
                    radioButtons[1].checked || radioButtons[3].checked),
        ),
    );`
			: ""
	}`;

export const radioGroupContent = {
	usage: `<div class="radio-group">
    <label class="group-label">Select your favorite city</label>
    <div class="radio-wrapper"></div>
</div>
<script>
    ${script("primary")}
</script>`,
	disabled: `<div class="radio-group" data-disabled>
    <label class="group-label">Select your favorite city</label>
    <div class="radio-wrapper"></div>
</div>
<script>
    ${script()}
</script>`,
	defaultValue: `<div class="radio-group">
    <label class="group-label">Select your favorite city</label>
    <div class="radio-wrapper"></div>
</div>
<script>
    ${script("secondary", true)}
</script>`,
	withDescription: `<div class="radio-group">
    <label class="group-label">Select your favorite city</label>
    <div class="radio-wrapper"></div>
</div>
<script>
    ${script("warning", true, true)}
</script>`,
	horizontal: `<div class="radio-group" data-orientation="horizontal">
    <label class="group-label">Select your favorite city</label>
    <div class="radio-wrapper"></div>
</div>
<script>
    ${script("primary")}
</script>`,
	invalid: `<div class="radio-group">
    <label class="group-label">Select your favorite city</label>
    <div class="radio-wrapper"></div>
</div>
<script>
    ${script("primary", true, false, true)}
</script>`,
	cusTomstyles: `<div class="radio-group">
    <label class="group-label">Plans</label>
    <div class="radio-wrapper">
        <label class="radio primary inline-flex m-0 bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-between flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent [&:has(:checked)]:border-[hsl(var(--base-primary))]">
            <span><input type="radio" name="radio" /></span>
            <div class="point-wrapper"><div class="point"></div></div>
            <span class="label-wrapper">
                <span class="label">Free</span>
                <span class="description">Up to 20 items</span>
            </span>
        </label>
        <label class="radio primary inline-flex m-0 bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-between flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent [&:has(:checked)]:border-[hsl(var(--base-primary))]">
            <span><input type="radio" name="radio" /></span>
            <div class="point-wrapper"><div class="point"></div></div>
            <span class="label-wrapper">
                <span class="label">Pro</span>
                <span class="description">Unlimited items. $10 per month</span>
            </span>
        </label>
        <label class="radio primary inline-flex m-0 bg-[hsl(var(--content-1))] hover:bg-[hsl(var(--content-2))] items-center justify-between flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent [&:has(:checked)]:border-[hsl(var(--base-primary))]">
            <span><input type="radio" name="radio" /></span>
            <div class="point-wrapper"><div class="point"></div></div>
            <span class="label-wrapper">
                <span class="label">Enterprise</span>
                <span class="description">24/7 support. Contact us for pricing.</span>
            </span>
        </label>
    </div>
    <span class="description">Selected plan can be changed at any time.</span>
</div>`,
};

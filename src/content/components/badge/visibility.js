export const visibility = `<div class="flex items-center gap-4 dark:text-white">
    <div class="flex items-center gap-3">
        <div class="badge-container danger circle" data-one-char>
            <i data-lucide="bell" fill="currentColor" width="30px" height="30px"></i>
            <span class="badge">5</span>
        </div>
        <div class="badge-container danger circle">
            <i data-lucide="shopping-cart" fill="currentColor" width="30px" height="30px"></i>
            <span class="badge">50</span>
        </div>
    </div>
    <label class="switch primary">
        <span><input type="checkbox" checked /></span>
        <span class="main-wrapper"><span class="thumb"></span></span>
        <span class="switch-label">Show badge</span>
    </label>
</div>
<script>
document
	.querySelector(".switch input[type=checkbox]")
	.addEventListener("change", e =>
		document
			.querySelectorAll(".badge-container .badge")
			.forEach(
				badge =>
					(badge.dataset.invisible = !e.target.checked),
			),
	);
</script>`;

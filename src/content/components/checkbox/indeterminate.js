export const indeterminate = `<label class="checkbox primary">
    <span>
        <input checked type="checkbox" id="checkbox" class="checkbox" /> 
    </span>
	<div class="icon-wrapper">
		<i data-lucide="minus" stroke-width="3"></i>
	</div>
	<span class="checkbox-label">Option</span>
</label>
<script>
    document.querySelector('.checkbox').addEventListener('click', e => e.preventDefault())
</script>`;

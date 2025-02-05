export const composition = `<div class="flex items-center justify-center my-6">
	<div class="card max-w-[340px]">
		<div class="card-header !justify-between">
			<div class="flex gap-5">
				<div class="avatar" data-bordered>
					<img src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</div>
				<div class="flex flex-col gap-1 items-start justify-center">
					<h4 class="text-sm font-semibold leading-none text-[hsl(var(--default-600))]">Tamara Bellis</h4>
					<h5 class="text-sm tracking-tight text-[hsl(var(--default-400))]">@tamara_bellis</h5>
				</div>
			</div>
			<button id="btn" class="button primary size-sm radius-full">Follow</button>
		</div>
		<div class="card-body !px-3 !py-0 text-sm text-[hsl(var(--default-400))]">
			<p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span class="pt-2">
          #FrontendWithTamara 
          <span class="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
		</div>
		<div class="card-footer text-sm gap-3">
			<div class="flex gap-1">
				<p class="font-semibold text-[hsl(var(--default-400))]">29</p>
				<p class="text-[hsl(var(--default-400))]">Following</p>
			</div>
			<div class="flex gap-1">
				<p class="font-semibold text-[hsl(var(--default-400))]">147.7K</p>
				<p class="text-[hsl(var(--default-400))]">Followers</p>
			</div>
		</div>
	</div>
</div>
<script>
    let toggled = false;
    document.querySelector("#btn").addEventListener("click", e => {
        toggled = !toggled;
        Object.assign(e.target, {
            className: toggled ? "button size-sm radius-full bordered" : "button primary size-sm radius-full",
            innerText: toggled ? "Followed" : "Follow"
        })
    })
</script>`;

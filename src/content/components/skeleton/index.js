export const skeletonContent = {
	usage: `<div class="flex items-center gap-3">
    <div class="skeleton w-12 h-12 rounded-full"></div>
    <div class="flex flex-col gap-2">
	    <div class="skeleton w-[200px] h-3 rounded-xl"></div>
	    <div class="skeleton w-[150px] h-3 rounded-xl"></div>
    </div>
</div>`,
	loadedState: `<div class="flex items-center gap-3">
  <div class="skeleton rounded-full">
    <div class="content size-12 rounded-full bg-[hsl(var(--base-secondary))]"></div>
  </div>
  <div class="flex flex-col gap-2">
    <div class="skeleton rounded-xl">
      <div class="content w-32 h-3 rounded-xl bg-[hsl(var(--secondary-300))]"></div>
    </div>
    <div class="skeleton rounded-xl w-max">
      <div class="content w-24 h-3 rounded-xl bg-[hsl(var(--secondary-200))]"></div>
    </div>
  </div>
</div>
<br/>
<button class="button secondary size-sm flat" onclick="toggleSkeleton(this)">Hide Skeleton</button>
<script>
  let toggled = false;
  const toggleSkeleton = (button) => {
  	toggled = !toggled;
  	document
  		.querySelectorAll(".skeleton")
  		.forEach(s =>
  			s.setAttribute("data-loaded", toggled ? "true" : "false")
  		);
  	button.innerText = toggled ? "Show Skeleton" : "Hide Skeleton";
  };
</script>`,
};

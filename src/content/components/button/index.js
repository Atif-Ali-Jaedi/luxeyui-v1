export const buttonContent = {
	usage: `<button class="button primary">Button</button>`,
	disabled: `<button class="button primary" data-disabled>Button</button>`,
	sizes: `<div class="flex gap-4 items-center">
    <button class="button size-sm">Small</button>
    <button class="button size-md">Medium</button>
    <button class="button size-lg">Large</button>
</div>`,
	radius: `<div class="flex items-center gap-4">
    <button class="button radius-full">Full</button>
    <button class="button radius-lg">Large</button>
    <button class="button radius-md">Medium</button>
    <button class="button radius-sm">Small</button>
    <button class="button radius-none">None</button>
</div>`,
	colors: `<div class="flex flex-wrap items-center gap-4">
    <button class="button foreground">Foreground</button>
    <button class="button default">Default</button>
    <button class="button primary">Primary</button>
    <button class="button secondary">Secondary</button>
    <button class="button success">Success</button>
    <button class="button warning">Warning</button>
    <button class="button danger">Danger</button>
</div>`,
	variants: `<div class="flex flex-wrap gap-4 items-center">
	<button class="button primary solid">Solid</button>
	<button class="button primary faded">Faded</button>
	<button class="button primary bordered">Bordered</button>
	<button class="button primary light">Light</button>
	<button class="button primary flat">Flat</button>
	<button class="button primary ghost">Ghost</button>
	<button class="button primary shadow">Shadow</button>
</div>`,
	loading: {
		basic: `<button class="button primary" data-disabled>
  <div class="spinner size-sm white">
    <div class="circle-wrapper">
      <i class="circle1"></i>
      <i class="circle2"></i>
    </div>
  </div>
  Loading
</button>`,
		custom: `<button class="button secondary" data-disabled>
  <svg class="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
  </svg>
  Loading
</button>`,
	},
	withIcons: `<div class="flex items-center gap-4">
  <button class="button success gap-2 min-w-max">
    Take a photo
    <i data-lucide="camera" stroke-width="1.5" fill="currentColor" class="[&_circle]:stroke-[hsl(var(--base-success))]"></i>
  </button>
  <button class="button danger bordered gap-2 min-w-max">
    <i data-lucide="user" stroke-width="1.5"></i>
    Delete user
  </button>
</div>`,
	iconOnly: `<div class="flex items-center gap-4">
  <button class="button danger" data-icon-only>
    <i data-lucide="heart" stroke-width="1.5"></i>
  </button>
  <button class="button faded warning" data-icon-only>
    <i data-lucide="camera" stroke-width="1.5" fill="currentColor" class="[&_circle]:stroke-[hsl(var(--default-100))]"></i>
  </button>
</div>`,
	customStyles: `<button class="button radius-full bg-gradient-to-tr from-[#ff4ecd] to-[#f5a524] !text-white shadow-lg m-2">Button</button>`,
	group: `<div class="button-group">
    <button class="button">One</button>
    <button class="button">Two</button>
    <button class="button">Three</button>
</div>`,
	groupDisabled: `<div class="button-group" data-disabled>
    <button class="button">One</button>
    <button class="button">Two</button>
    <button class="button">Three</button>
</div>`,
};

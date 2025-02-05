export const withValue = `<div class="circular-progress size-lg warning" data-value="56%">
  <div class="svg-wrapper">
    <svg class="progress" viewBox="0 0 32 32" fill="none" stroke-width="3">
        <circle class="track" cx="16" cy="16" r="13" role="presentation" stroke-dasharray="81.68140899333463" stroke-dashoffset="0" transform="rotate(-90 16 16)" stroke-linecap="round"></circle>
        <circle class="indicator" cx="16" cy="16" r="13" role="presentation" stroke-dasharray="81.68140899333463" stroke-dashoffset="81.68140899333463" transform="rotate(-90 16 16)" stroke-linecap="round"></circle>
      </svg>
    <span class="value"></span>
  </div>
</div>
<script>
    let value = 0;

    setInterval(() => {
        value = value >= 100 ? 0 : value + 10;
        document.querySelector('.circular-progress').dataset.value = \`\${value}%\`;
    }, 500);

</script>`;

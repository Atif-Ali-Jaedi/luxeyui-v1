export const controlledVisibility = `<button class="button bordered">Show Alert</button>
<div class="alert success faded">
    <div class="icon-wrapper"></div>
    <div class="main-wrapper">
        <div class="title">Success Notification</div>
        <div class="description">Your action has been completed successfully. We'll notify you when updates are available.</div>
    </div>
    <button class="button close-button light success size-sm radius-full" data-icon-only></button>
</div>
<script>
    const modifyVisibility = (value) => {
        document.querySelector('.alert').style.display = value ? 'flex' : 'none';
        document.querySelector('button').style.display = value ? 'none' : 'block';
    }
    document.querySelector('.button').addEventListener('click', () => modifyVisibility(true));
    document.querySelector('.close-button').addEventListener('click', () => modifyVisibility(false));
    modifyVisibility(true);
</script>`
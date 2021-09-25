import Log from 'core/log';
export const boot_modal = () => {

    // Set up variables.
    const button = document.getElementById('bootbtn');
    const modal = document.getElementById('mod_sandbox_myModal');
    const closeicon = document.getElementById('mod_sandbox_close');
    const savebtn = document.getElementById('mod_sandbox_savebtn');
    const comment = document.getElementsByClassName('mod_sandbox_content')[0];
    const input = document.getElementById('ex3');

    // Add event listeners.
    button.addEventListener('click', showModal);
    closeicon.addEventListener('click', hideModal);
    savebtn.addEventListener('click', saveModal);

    // Actions.
    function showModal() {
        modal.style.display = "block";
    }
    function hideModal() {
        modal.style.display = "none";
    }
    function saveModal() {
        Log.info(comment);
        Log.info(input.value);
        hideModal();
        comment.innerHTML = input.value;
    }
};

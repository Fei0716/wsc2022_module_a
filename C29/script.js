const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const modal = document.querySelector('.modal');

btnOpen.addEventListener("click", (e)=>{
    modal.classList.add('show');
});

btnClose.addEventListener("click", (e)=>{
    modal.classList.remove('show');
});


modal.addEventListener("click", (e) => {
    // Check if the click was on the modal itself and not on its content
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
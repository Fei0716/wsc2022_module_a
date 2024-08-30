const costLeft = document.querySelector('.cost-left > span');
const costRight = document.querySelector('.cost-right > span');
const slider = document.querySelector('#slider');
const bar = document.querySelector('.bar');
const circleLeft = document.querySelector('.circle-left');
const circleRight = document.querySelector('.circle-right');

let circleLeftWidth = parseFloat(getComputedStyle(circleLeft).width);
let circleRightWidth = parseFloat(getComputedStyle(circleRight).width);

function moveCircleLeft(e) {
    let rect = slider.getBoundingClientRect();
    let newLeft = e.clientX - rect.left - (circleLeftWidth / 2);

    // Constrain within bounds
    if (newLeft < 0) newLeft = 0;
    if (newLeft > parseFloat(getComputedStyle(bar).left) + parseFloat(getComputedStyle(bar).width) - circleLeftWidth - (rect.width / 20)) {
        newLeft = parseFloat(getComputedStyle(bar).left) + parseFloat(getComputedStyle(bar).width) - circleLeftWidth - (rect.width / 20);
    }

    let newWidth = parseFloat(getComputedStyle(bar).width) + parseFloat(getComputedStyle(bar).left) - newLeft;

    // Update bar and circle position
    bar.style.left = `${newLeft}px`;
    bar.style.width = `${newWidth}px`;

    // Update the min price
    costLeft.innerHTML = `${Math.round(newLeft / rect.width * 1000)}`;

    // Update the stored lastLeft and lastWidth
    lastLeft = newLeft;
    lastWidth = newWidth;
}

function moveCircleRight(e) {
    let rect = slider.getBoundingClientRect();
    let newRight = e.clientX - rect.left + (circleRightWidth / 2);

    // Constrain within bounds
    if (newRight > rect.width) newRight = rect.width;
    if (newRight < parseFloat(getComputedStyle(bar).left) + circleLeftWidth + (rect.width / 20)) {
        newRight = parseFloat(getComputedStyle(bar).left) + circleLeftWidth  + (rect.width / 20);
    }

    let newWidth = newRight - parseFloat(getComputedStyle(bar).left);

    // Update bar width
    bar.style.width = `${newWidth}px`;

    // Update the max price
    costRight.innerHTML = `${Math.round(newRight / rect.width * 1000)}`;

    // Update the stored lastWidth
    lastWidth = newWidth;
    circleRightLeft = newRight;
}

// Left Circle Events
circleLeft.addEventListener("pointerdown", (e) => {
    e.target.setPointerCapture(e.pointerId);
    moveCircleLeft(e);
    e.target.addEventListener("pointermove", moveCircleLeft);
    e.target.addEventListener("pointerup", (e) => {
        e.target.releasePointerCapture(e.pointerId);
        e.target.removeEventListener("pointermove", moveCircleLeft);
    });
});

// Right Circle Events
circleRight.addEventListener("pointerdown", (e) => {
    e.target.setPointerCapture(e.pointerId);
    moveCircleRight(e);
    e.target.addEventListener("pointermove", moveCircleRight);
    e.target.addEventListener("pointerup", (e) => {
        e.target.releasePointerCapture(e.pointerId);
        e.target.removeEventListener("pointermove", moveCircleRight);
    });
});
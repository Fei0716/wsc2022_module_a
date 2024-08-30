// Input your code
const cards = document.querySelectorAll(".card");
const containers = document.querySelectorAll(".group-sortable");

cards.forEach((c) =>{
    c.setAttribute("draggable", true);

    //add dragstart event
    c.addEventListener("dragstart", (e)=>{
        c.classList.add("dragging");
    });

    //add dragend event
    c.addEventListener("dragend", (e)=>{
        c.classList.remove("dragging");
    });
})

containers.forEach((c)=>{
    c.addEventListener("dragover" , (e)=>{
        e.preventDefault();
        const bottomTask  = insertAboveTask(c, e.clientY);
        const curTask = document.querySelector(".dragging");
        if(!bottomTask){
            //if there's no cards at the bottom of this current task that's being drag append to the bottom of the container
            c.appendChild(curTask);
        }else{
            c.insertBefore(curTask , bottomTask);
        }
    });
});

function insertAboveTask(c, y){
    const els = c.querySelectorAll(".card:not(.dragging)");
    let closest = null;
    let closestOffset = Number.NEGATIVE_INFINITY;
    els.forEach((el)=>{
        const {top} = el.getBoundingClientRect();
        const offset = y - top;
        if(offset < 0 && offset > closestOffset){
            closestOffset = offset;
            closest = el;
        }
    });
    return closest;
}


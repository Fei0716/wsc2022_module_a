let  links = document.querySelectorAll('a');
let targetPage;

links.forEach((l)=> {
    l.addEventListener("click", (e)=>{
        e.preventDefault();
        targetPage = e.target.href;
        getPageContent();
    });
});

async function getPageContent(){
    const res = await fetch(`${targetPage}`);
    let html = document.createElement("html");
    html.innerHTML = await res.text();
    //replace the current dom
    document.querySelector('html').replaceWith(html);

    links = document.querySelectorAll('a');

    links.forEach((l)=> {
        l.addEventListener("click", (e)=>{
            e.preventDefault();
            targetPage = e.target.href;
            getPageContent();
        });
    });


    //replace the link without refreshing the page
    history.pushState(null, "", `${targetPage}`);
}
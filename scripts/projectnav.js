const tocList = document.getElementById("toc-list");
const headings = document.querySelectorAll("article h2, article h3");
let subheadings = null;

headings.forEach((heading, index) => {

    const listItem = document.createElement("li");
    listItem.classList.add("small-text");
    const link = document.createElement("a");

    const isSub = heading.tagName.toLowerCase() === "h3";

    link.classList.add(`${ isSub ? "project-subheading-link" : "project-heading-link"}`);

    link.href = `#${heading.id}`;
    link.textContent = `${heading.textContent} ${isSub ? " - " :""}`;

    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
    listItem.appendChild(link);

    //handle adding correctly
    const previousElement = heading.previousElementSibling;
    if(isSub){

        if(!subheadings){
            subheadings = document.createElement("ul");
            subheadings.classList.add("subheadings-list");
        }
        subheadings.appendChild(listItem);
    } else{
        if(subheadings){
            tocList.appendChild(subheadings);
            subheadings = null;
        }
        tocList.appendChild(listItem);
    }

    if(index === headings.length - 1 && subheadings){
        tocList.appendChild(subheadings);
    }


});


// const mainContent = document.getElementById('main-content');

// mainContent.addEventListener("scroll", () =>{
//     const tocRect = tocList.getBoundingClientRect();
    
//     // if(tocRect.top < 128){
//     //     tocList.style.position = "fixed";
//     //     tocList.style.top = "64px";
//     //     tocList.style.right = "64px";
//     // } else{
//     //     tocList.style.position = "sticky";
//     //     tocList.style.top = "";
//     // }
// });



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const link = tocList.querySelector(`[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}, { threshold: 0.1 });

headings.forEach(heading => {
    observer.observe(heading);
});
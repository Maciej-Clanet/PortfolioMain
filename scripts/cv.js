const experiences = {
    "cv-pos" : {
        "heading" : `<h2 class="heading-text">POSperity Software</h2>`,
        "description" : `
        <p class="paragraph-text">I’m a part owner of the startup and a full stack developer on our Point of Sale system designed for restaurants.</p>
        <p class="paragraph-text">While my main responsibility is creating the back-end with Rust, I routinely work on the Front-end using Typescript and React.</p>
        <p class="paragraph-text">I’m also the primary designer, responsible for all UI/UX of the application.</p>
        <p class="paragraph-text"><a href="./development/pos.html">Read more about the POS here →</a></p>
        `
    },
    "cv-lecturer-uxb" : {
        "heading" : `<h2 class="heading-text">Lecturer at Uxbridge</h2>`,
        "description" : `
        <p class="paragraph-text">I have been working at Uxbridge College, teaching web development and computer science to Level 2 and Level 3 students.</p> 
        <p class="paragraph-text">The topics I teach include React, FastAPI, Figma, Fundamentals of Computing, and Cybersecurity and Encryption. I am responsible for all of the technical subjects for the Level 2 web development course and the Level 3 T-Level courses.</p>
        `
    },
    "cv-pod": {
        "heading": `<h2 class="heading-text">Print on Demand</h2>`,
        "description": `
        <p class="paragraph-text">I create designs that get printed on t-shirts and similar items. I'm looking to launch a t-shirt brand soon.</p>
        `
    },
    "cv-lecturer-hayes": {
        "heading": `<h2 class="heading-text">Lecturer at Hayes</h2>`,
        "description": `
        <p class="paragraph-text">I taught web development and C++ programming at Hayes College. I have also taught other subjects like computer hardware and e-commerce.</p>
        `
    }
}

    


function changeEntryDescription(choice){

    var descriptionBox = document.getElementById("cv-entry-description")
    choiceInfo = experiences[choice];

    descriptionBox.innerHTML = `
        ${choiceInfo.heading}
        ${choiceInfo.description}
    `

    var allEntries = document.getElementsByClassName("cv-entry")
    for (var entry of allEntries){
        entry.classList.remove("active")
    };
    document.getElementById(choice).classList.add("active");
}

//for keyboard navigation of job experience
document.addEventListener('DOMContentLoaded', () => {
    const entries = document.querySelectorAll('.cv-entry');

    entries.forEach(entry => {
        entry.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                entry.click();
            }
        });
    });

});

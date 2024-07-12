const experiences = {
    "cv-pos" : {
        "heading" : "POSperity Software",
        "description" : `test`
    },
    "cv-lecturer-uxb" : {
        "heading" : "Lecturer at Uxbridge",
        "description" : `test`
    },
    "cv-pod" : {
        "heading" : "Print on Demand",
        "description" : `test`
    },
    "cv-lecturer-hayes" : {
        "heading" : "Lecturer at Hayes",
        "description" : `test`
    }
}

    


function changeEntryDescription(choice){


    var descriptionBox = document.getElementById("cv-entry-description")
    choiceInfo = experiences[choice];

    descriptionBox.innerHTML = `
        <h2 class="heading-text">${choiceInfo.heading}</h2>
        <p class="paragraph-text">${choiceInfo.description}</p>
    `

    var allEntries = document.getElementsByClassName("cv-entry")
    for (var entry of allEntries){
        entry.classList.remove("active")
    };
    document.getElementById(choice).classList.add("active");
}
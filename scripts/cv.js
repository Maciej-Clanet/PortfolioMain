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




    // //email to clipboard functionality
    // const copyButton = document.getElementById("copy-button");
    // const emailText = document.getElementById("email-text").textContent;

    // copyButton.addEventListener("click", () => {
    //     navigator.clipboard.writeText(emailText).then(() => {
    //         showNotification("Email address copied to clipboard");
    //     }).catch(err => {
    //         showNotification("Failed to copy email", true);
    //         console.error("Failed to copy email: ", err)
    //     });
    // });


    // //compose email
    // const composeButton = document.getElementById("compose-button");
    // const emailAddress = emailText;

    // composeButton.addEventListener("click", () => {
    //     window.location.href = `mailto:${emailAddress}`
    // });
});

// function showNotification(message, isError = false){
//     const notificationContainer = document.getElementById('notification-container');
//     const notification = document.createElement('div');
//     notification.classList.add('notification');

//     if (isError) {
//         notification.style.backgroundColor = '#e74c3c'; // Red background for errors
//     }

//     notification.textContent = message;
//     notificationContainer.appendChild(notification);

//     //show notification
//     setTimeout(() => {
//         notification.classList.add("show");
//     }, 10);

//     setTimeout(() => {
//         notification.classList.remove("show");
//         notification.classList.add("hide");

//         notification.addEventListener("transitioned", () => {
//             notification.remove();
//         });
//     }, 2000);
// }
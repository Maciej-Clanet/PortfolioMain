document.addEventListener('DOMContentLoaded', () => {

    //email to clipboard functionality
    const copyButton = document.getElementById("copy-button");
    const emailText = document.getElementById("email-text").textContent;

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(emailText).then(() => {
            showNotification("Email address copied to clipboard");
        }).catch(err => {
            showNotification("Failed to copy email", true);
            console.error("Failed to copy email: ", err)
        });
    });


    //compose email
    const composeButton = document.getElementById("compose-button");
    const emailAddress = emailText;

    composeButton.addEventListener("click", () => {
        window.location.href = `mailto:${emailAddress}`
    });


    //contact form
    const form = document.getElementById("contact-form");
    const result = document.getElementById("form-submit-text");
    const submitButton = document.getElementById("contact-submit-button");
    const buttonText = submitButton.querySelector('.button-text');
    const spinner = submitButton.querySelector('.spinner');

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        console.log(object)

        if(!object.message){
            showNotification("You seem to forgot to write a message!", true);
            return;
        }
        if(!object.email){
            showNotification("I can't respond without an email!", true);
            return;
        }

        //do a waiting slider here or something


        Array.from(form.elements).forEach(element => element.disabled = true);
        
        submitButton.classList.add("sending");
        result.innerHTML = "Sending, please wait...";
        result.classList.remove("success", "danger");
        


        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Message received, Thank you!";
                result.classList.add("success");

                showNotification("Message received, Thank you!");

                form.reset();
            } else {
                console.log(response);
                result.innerHTML = "Sorry, something went wrong. Please wait and try again!";
                result.classList.add("danger");
                showNotification(`Something went wrong: ${json.message}`, true);
                buttonText.innerHTML = "RETRY";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Sorry, something went wrong. Please wait and try again!";
            result.classList.add("danger");
            showNotification(`Something went wrong: ${error}`, true);

            // submitButton.textContent = "RETRY";
            buttonText.innerHTML = "RETRY";
        })
        .finally(() => {
            Array.from(form.elements).forEach(element => element.disabled = false);
            submitButton.classList.remove('sending');
        });

    });
});

function sendContactForm(event){
    event.preventDefault();

    const contactForm = document.getElementById("contact-form");
    const messageContent = document.getElementById("message-area").value;
    const userEmail = document.getElementById("user-email").value;

    if(!messageContent){
        showNotification("You seem to forgot to write a message!", true);
        return;
    }
    if(!userEmail){
        showNotification("I can't respond without an email!", true);
        return;
    }

    contactForm.submit();
    showNotification("Message received, Thank you!");
}


function showNotification(message, isError = false){
    const notificationContainer = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification');

    if (isError) {
        notification.style.color = '#FD4D4D'; // Red background for errors
    }

    notification.textContent = message;
    notificationContainer.appendChild(notification);

    //show notification
    setTimeout(() => {
        notification.classList.add("show");
    }, 10);

    setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("hide");

        notification.addEventListener("transitioned", () => {
            notification.remove();
        });
    }, 2000);
}
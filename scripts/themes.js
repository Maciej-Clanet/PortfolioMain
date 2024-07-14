const userThemeChoice = localStorage.getItem('theme');
const toggle = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("theme-toggle-icon");
const toggleText = document.getElementById("theme-toggle-text");

// Function to get the correct base path
function getBasePath() {
    const path = window.location.pathname;
    let basePath = '';

    // Adjust the path based on the current location
    if (path.includes('/development/') || path.includes('/design/')) {
        basePath = '../assets/icons/';
    } else if (path === '/PortfolioMain/' || path === '/PortfolioMain/index.html') {
        basePath = './assets/icons/';
    } else {
        basePath = './assets/icons/';
    }

    return basePath;
}

let basePath =  getBasePath();
if( window.location.pathname.includes('/development') ||  window.location.pathname.includes('/design')){
    basePath = "../assets/icons/"
}

if (userThemeChoice === 'light') {
    setThemeLight();
}

function setThemeLight(){
    localStorage.setItem("theme", "light");
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    toggleIcon.src = basePath + "moon.svg";
    toggleIcon.alrt = "Moon icon for dark mode";

    toggleText.innerText = "Switch to dark mode"
}

function setThemeDark(){
    localStorage.setItem("theme", "dark");
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    toggleIcon.src = basePath + "sun.svg";
    toggleIcon.alrt = "Sun icon for light mode";

    toggleText.innerText = "Switch to light mode"
}

toggle.addEventListener("click", () => {
    const current = localStorage.getItem("theme");

    if(current == "light"){
        setThemeDark();
    } else {
        setThemeLight();
    }
});


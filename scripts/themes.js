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


const mainContainer = document.getElementById("main-container");
let currentX = 0, currentY = 0;
let targetX = 0, targetY = 0;
let currentSize = 0;

document.addEventListener('mousemove', (e) => {
    const rect = mainContainer.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
});

// function updateGradient(){
//     currentX += (targetX - currentX) * 0.1;
//     currentY += (targetY - currentY) * 0.1;

//     const followGradient = `radial-gradient(circle at ${currentX}px ${currentY}px, var(--gradient-3-start) 0%, var(--gradient-3-end) 70%)`;

//     mainContainer.style.background = `
//                 radial-gradient(circle at -15% -50%, var(--gradient-1-start) 0%, var(--gradient-1-end) 100%),
//                 radial-gradient(circle at 120% 120%, var(--gradient-2-start) 0%, var(--gradient-2-end) 100%),
//                 ${followGradient}`;
//     requestAnimationFrame(updateGradient);
// }

// function updateGradient() {
//     // Update current positions gradually towards target positions
//     currentX += (targetX - currentX) * 0.06;
//     currentY += (targetY - currentY) * 0.06;

//     // Calculate the distance from the center of the container
//     const rect = mainContainer.getBoundingClientRect();
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     // Calculate the distance from the gradient to the mouse cursor
//     const distance = Math.sqrt(Math.pow(currentX - targetX, 2) + Math.pow(currentY - targetY, 2));
//     const maxDistance = Math.sqrt(Math.pow(mainContainer.offsetWidth, 2) + Math.pow(mainContainer.offsetHeight, 2));


//     // Calculate the size of the gradient based on the distance
//     const sizePercentage = Math.min(40, 40 * (1 - distance / maxDistance));

//     const followGradient = `radial-gradient(circle at ${currentX}px ${currentY}px, var(--gradient-3-start) 0%, var(--gradient-3-end) ${sizePercentage}%)`;

//     mainContainer.style.background = `
//         radial-gradient(circle at -15% -50%, var(--gradient-1-start) 0%, var(--gradient-1-end) 100%),
//         radial-gradient(circle at 120% 120%, var(--gradient-2-start) 0%, var(--gradient-2-end) 100%),
//         ${followGradient}
//     `;

//     requestAnimationFrame(updateGradient);
// }


function updateGradient() {
    // Update current positions gradually towards target positions
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    // Calculate the distance from the gradient to the mouse cursor
    const distance = Math.sqrt(Math.pow(currentX - targetX, 2) + Math.pow(currentY - targetY, 2));
    const maxDistance = Math.sqrt(Math.pow(mainContainer.offsetWidth, 2) + Math.pow(mainContainer.offsetHeight, 2));

    // Calculate the target size of the gradient based on the distance
    const targetSize = Math.min(40, 40 * (1 - distance / maxDistance));

    // Update the current size gradually towards the target size
    currentSize += (targetSize - currentSize) * 0.1;

    const followGradient = `radial-gradient(circle at ${currentX}px ${currentY}px, var(--gradient-3-start) 0%, var(--gradient-3-end) ${currentSize}%)`;

    mainContainer.style.background = `
        radial-gradient(circle at -15% -50%, var(--gradient-1-start) 0%, var(--gradient-1-end) 100%),
        radial-gradient(circle at 120% 120%, var(--gradient-2-start) 0%, var(--gradient-2-end) 100%),
        ${followGradient}
    `;

    requestAnimationFrame(updateGradient);
}

updateGradient();


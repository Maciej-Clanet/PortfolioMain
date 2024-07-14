document.addEventListener('keydown', function(event) {
    console.log("keydown")
    // Check if the key pressed is a number key between 1 and 6
    if (event.key >= '1' && event.key <= '6') {
        // Define an array of URLs corresponding to the number keys

        const baseURL = window.location.hostname === 'maciej-clanet.github.io' ? '/PortfolioMain' : '';
        const urls = [
            `${baseURL}/index.html`,    // 1
            `${baseURL}/about.html`,   // 2
            `${baseURL}/development.html`, // 3
            `${baseURL}/design.html`,  // 4
            `${baseURL}/cv.html`,      // 5
            `${baseURL}/contact.html`  // 6
        ];


        // Check if the currently focused element is an input or textarea
        const focusedElement = document.activeElement;
        const isInputField = focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA';

        // If the focused element is an input or textarea, do not execute the navigation logic
        if (isInputField) {
            return;
        }

        // Get the index of the pressed key (convert key to number and subtract 1 for zero-based index)
        const index = parseInt(event.key) - 1;

        // Navigate to the corresponding URL
        window.location.href = urls[index];
    }
});
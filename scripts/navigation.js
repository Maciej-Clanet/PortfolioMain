document.addEventListener('keydown', function(event) {
    console.log("keydown")
    // Check if the key pressed is a number key between 1 and 6
    if (event.key >= '1' && event.key <= '6') {
        // Define an array of URLs corresponding to the number keys
        const urls = [
            './home.html',    // 1
            './about.html',   // 2
            './development.html', // 3
            './design.html',  // 4
            './cv.html',      // 5
            './contact.html'  // 6
        ];

        // Get the index of the pressed key (convert key to number and subtract 1 for zero-based index)
        const index = parseInt(event.key) - 1;

        // Navigate to the corresponding URL
        window.location.href = urls[index];
    }
});
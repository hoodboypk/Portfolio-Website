document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section ID from data attribute
        const targetId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetId);

        // Hide the currently active section
        const currentActive = document.querySelector('main section.active');
        if (currentActive) {
            currentActive.classList.remove('active');
            currentActive.classList.add('hidden');
        }

        // Show the target section
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    });
});

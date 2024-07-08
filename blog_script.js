document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById('topicDropdown');
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const title3 = document.getElementById('title3');
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    fetch('blogs.json')
        .then(response => response.json())
        .then(data => {
            dropdown.addEventListener('change', () => {
                const selectedTopic = dropdown.value;
                const topic = data.topics.find(t => t.name === selectedTopic);

                if (topic) {
                    title1.textContent = topic.titles[0];
                    title2.textContent = topic.titles[1];
                    title3.textContent = topic.titles[2];
                    img1.src = topic.images[0];
                    img2.src = topic.images[1];
                    img3.src = topic.images[2];
                }
            });

            // Trigger change event to set default titles and images
            dropdown.dispatchEvent(new Event('change'));
        })
        .catch(error => console.error('Error fetching blog data:', error));
});

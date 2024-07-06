document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById('topicDropdown');
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const title3 = document.getElementById('title3');

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
                }
            });

            // Trigger change event to set default titles
            dropdown.dispatchEvent(new Event('change'));
        })
        .catch(error => console.error('Error fetching blog titles:', error));
});

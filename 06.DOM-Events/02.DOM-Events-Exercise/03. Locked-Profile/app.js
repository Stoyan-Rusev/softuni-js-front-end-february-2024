function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');
    for (const profile of profiles) {
        const showButton = profile.querySelector('button');
        const lock = profile.querySelector('input[type=radio][value=lock]');

        showButton.addEventListener('click', (e) => {
            if (lock.checked) {
                return;
            }

            const hiddenElement = showButton.previousElementSibling;
            if (showButton.textContent === 'Show more') {
                hiddenElement.style.display = 'block';
                showButton.textContent = 'Hide it'; 
            } else {
                hiddenElement.style.display = 'none';
                showButton.textContent = 'Show more'; 
            }   
        });
    }
}
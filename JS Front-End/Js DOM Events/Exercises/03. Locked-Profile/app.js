function lockedProfile() {
    const profiles = document.querySelectorAll('#container #main > div.profile');

    for (const profile of profiles) {
        const profileRadioElement = profile.querySelector('input[value=lock]');
        const profileShowButton = profile.querySelector('button');

        profileShowButton.addEventListener('click', () => {
            if(profileRadioElement.checked) {
               return; 
            }

            const moreInformationElement = profileShowButton.previousElementSibling;

            if(profileShowButton.textContent === 'Show more') {
                moreInformationElement.style.display = 'block';
                profileShowButton.textContent = 'Hide it';
            } else {
                moreInformationElement.style.display = 'none';
                profileShowButton.textContent = 'Show more';
            }
        });
    }
}
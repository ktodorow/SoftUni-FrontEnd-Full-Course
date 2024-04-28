function lockedProfile() {
    const mainElement = document.getElementById('main');
    const profilesCollection = document.querySelector('.profile');
    const profileElement = document.createElement('div');
    profileElement.setAttribute('class', 'profile');

    const profileSkeleton = profilesCollection.innerHTML;

    const parser = new DOMParser();
    const html = parser.parseFromString(profileSkeleton, 'text/html');
    
    console.log(html);
    

    

}
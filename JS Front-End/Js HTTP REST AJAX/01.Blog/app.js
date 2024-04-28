function attachEvents() {
    const basePostsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const baseCommentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
   
    const postsElement = document.getElementById('posts');
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPostsButton = document.getElementById('btnViewPost');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');
   
    let posts = {};

    const loadPostEvent = function() {
        fetch(basePostsUrl)
        .then(res => res.json())
        .then(data => {
            posts = data; 

            for (const key in data) {
                const optionElement = document.createElement('option');
                optionElement.setAttribute('value', key)
                optionElement.textContent = data[key].title
               
                postsElement.appendChild(optionElement);
            }
        })

        loadPostsButton.removeEventListener('click', loadPostEvent);
    }

    loadPostsButton.addEventListener('click', loadPostEvent);


    viewPostsButton.addEventListener('click', () => {
        fetch(baseCommentsUrl)
        .then(res => res.json())
        .then(data => {

            postCommentsElement.textContent = '';

            const selectedPostTitle = postsElement.options[postsElement.selectedIndex].textContent;
            const selectedPostId = postsElement.options[postsElement.selectedIndex].value;

            postTitleElement.textContent = selectedPostTitle;
            postBodyElement.textContent = posts[selectedPostId].body;

            for (const key in data) {
                if(data[key].postId === selectedPostId) {
                    const liCommentElement = document.createElement('li');
                    liCommentElement.setAttribute('id', key);
                    liCommentElement.textContent = data[key].text;

                    postCommentsElement.appendChild(liCommentElement);
                }
            }
        });
    })
}

attachEvents();
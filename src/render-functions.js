export const renderBookList = (bookListEl, books) => {
    bookListEl.innerHTML = ''

    for (let i = 0; i < books.length; i++) {
        // Create a new h1 HTML element
        const li = document.createElement('li');
        const img = document.createElement('img');
        const pTag = document.createElement('p');
        const button = document.createElement('button');

        img.src = books[i].coverUrl
        img.alt = `An old cover of ${books[i].title}`
        pTag.textContent = `Title: ${books[i].title}`
        button.dataset.authorUrlKey = books[i].author.urlKey
        button.textContent = View ${books[i].author.name}

        li.append(img, pTag, button)
        bookListEl.append(li)
    }

}

export const renderAuthorInfo = (authorInfoEl, author) => {
    authorInfoEl.innerHTML = "";
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const a = document.createElement("a");

    h2.textContent = author.name;
    img.src = author.pictureUrl;
    img.alt = `A picture of ${author.name}`;
    p.textContent = `Born: ${author.birthDate}`;
    p2.textContent = author.bio;
    a.href = author.wikipediaUrl;
    a.textContent = `Wikipedia Link`;

    authorInfoEl.append(h2, img, p, p2, a);
};

export const renderNewUserForm = (newUserFormEl) => {
    newUserFormEl.innerHTML = 
    `<label for="username">Username</label>
    <input id="username" name="username">
    <label for="is-cool">Is this user cool?</label>
    <input type="checkbox" id="is-cool" name="isCool">
    <label for="favorite-language">Favorite Language</label>
    <select name="favoriteLanguage" id="favorite-language">
        <option value="None">None</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
    </select>
    <button>Create User</button>`
};

export const renderNewUser = (newUserEl, newUser) => {
}
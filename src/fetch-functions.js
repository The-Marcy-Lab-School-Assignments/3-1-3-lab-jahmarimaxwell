
export const getFirstThreeFantasyBooks = async () => {
    try {
        const url = 'https://openlibrary.org/subjects/fantasy.json';
        //set res and await until it fetches
        let res = await fetch(url)
        // if res.ok status is false throw error
        if (!res.ok) { throw new Error("Failed to get fantasy books") }
        let data = await res.json()
        let EmtyArray = []
        for (let i = 0; i <= 2; i++) {
            EmtyArray.push({
                title: data.works[i].title,
                author: {
                    name: data.works[i].authors[0].name,
                    urlKey: data.works[i].authors[0].key
                },
                coverUrl: `https://covers.openlibrary.org/a/id/${data.works[i].cover_id}-M.jpg`
            })
        }
        return EmtyArray
    }
    catch (error) {
        console.warn(error.message)
        return null
    }
}
export const getAuthor = async (urlKey) => {
    try {
        const res = await fetch(`https://openlibrary.org${urlKey}.json`)
        if (!res.ok) { throw new Error('Failed to get author') }
        const data = await res.json()
        const obj = {
            birthDate: data.birth_date,
            bio: data.bio,
            wikipediaUrl: data.wikipedia,
            name: data.name,
            pictureUrl: `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`
        }
        return obj
    } catch (error) {
        console.warn(error)
        return null
    };
}
export const createNewUser = async (userobj) => {
    try {
        const obj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userobj)
        }
        const res = await fetch('https://jsonplaceholder.typicode.com/users', obj)
        if (!res.ok) { throw new Error('Failed to create new user') }
        const data = await res.json()
        return data
    } catch (error) {
        console.warn(error)
        return null
    }
}
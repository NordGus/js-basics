const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    const propertyType = 'string';

    for (let key in obj)
        if (typeof(obj[key]) === propertyType)
            console.log(key, obj[key]);
}
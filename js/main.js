fetch("https://malvestida.com/wp-json/wp/v2/pages")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        console.log(json);
    })
const url = '../data.json';

const getAssets = () => {
    return fetch(url)
        .then(value => value.json());
}

export {getAssets};
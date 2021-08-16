
const siteUrl = 'http://195.72.146.25/api/v1/';

export function getCars() {
    return fetch(siteUrl + 'cars')
        .then(resp => resp.json());
}

export function postCar(car) {

    return fetch(siteUrl + 'cars')
        .then(resp => resp.json());
}
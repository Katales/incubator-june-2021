
const siteUrl = 'http://195.72.146.25/api/v1/cars';
let init = {
    headers: { 'content-type': 'application/json; charset=UTF-8'}
};

export function getCars() {
    return fetch(siteUrl)
        .then(resp => resp.json());
}

export function getCar(carId) {
    return fetch(siteUrl + `/${carId}`)
        .then(resp => resp.json());
}

export function postCar(car) {
    init.method = 'POST';
    init.body = JSON.stringify(car)

    return fetch(siteUrl, init);
}

export function updCar(car) {
    init.method = 'PUT';
    init.body = JSON.stringify(car)

    return fetch(siteUrl + `/${car.id}`, init);
}

export function delCar(carId) {
    init.method = 'DELETE';

    return fetch(siteUrl + `/${carId}`, init);
}
import './Car.css'


export function Car ({car}) {
    car = car || {};

    return (
        <div className={'car flxRow'}>
            <p><b># {car.id}</b></p>
            <p>Model: {car.model}</p>
            <p>year: {car.year}</p>
            <p>Price: {car.price}</p>
        </div>
    )
}
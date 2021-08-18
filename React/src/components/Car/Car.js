import './Car.css'


export function Car ({car, cbDeleteCar, cbEditCar}) {
    car = car || {};

    const onclickBtnDelete = () => cbDeleteCar(car.id);

    const onclickBtnEdit = () => cbEditCar(car.id);

    return (
        <div className={'car flxRow'}>
            <p><b># {car.id}</b></p>
            <p>Model: <b>{car.model}</b></p>
            <p>year: <b>{car.year}</b></p>
            <p>Price: <b>{car.price}</b></p>
            <button className={''} onClick={onclickBtnEdit}>Edit</button>
            <button className={''} onClick={onclickBtnDelete}>Delete</button>
        </div>
    )
}
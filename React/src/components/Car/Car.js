import './Car.css'
import {delCar} from "../../services/data.connector";


export function Car ({car, cbRequestUpdate, cbEditCar}) {
    car = car || {};

    const onclickBtnDelete = () => {
        delCar(car.id)
            .then( () => cbRequestUpdate());
    }

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
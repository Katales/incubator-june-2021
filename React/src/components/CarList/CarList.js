import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {delCar, getCars} from "../../services/data.connector";


export function CarList ({updateSignal, cbRequestUpdate, cbEditCar}) {

    console.log('<CarList>');

    let [carList, setCarList] = useState([]);


    useEffect( () => {
        getCars().then(cars => setCarList(cars))
            .then(resp => console.log('Cars FETCHED'));
    }, [updateSignal])

    const cbDeleteCar = (carId) => {
        delCar(carId)
            .then( () => cbRequestUpdate());

    }
    return (
        <div className={'carList flxCol'}>
            {updateSignal}
            {carList.map( car => <Car car={car} key={car.id}
                cbDeleteCar={cbDeleteCar}
                cbEditCar={cbEditCar}/>)}
        </div>
    )
}
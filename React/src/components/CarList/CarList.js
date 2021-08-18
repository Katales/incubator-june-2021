import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../../services/data.connector";


export function CarList ({updateSignal, cbRequestUpdate, cbEditCar}) {
    // console.log('<CarList>');

    let [carList, setCarList] = useState([]);

    useEffect( () => {
        getCars().then(cars => setCarList(cars))
            // .then(resp => console.log('Cars FETCHED'));
    }, [updateSignal])

    return (
        <div className={'carList flxCol'}>
            {updateSignal}
            {carList.map( car => <Car car={car} key={car.id}
                cbRequestUpdate={cbRequestUpdate}
                cbEditCar={cbEditCar}
            />)}
        </div>
    )
}
import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../../services/data.connector";


export function CarList () {

    let [carList, setCarList] = useState([]);
    useEffect( () => {
        getCars().then(cars => setCarList(cars));
    }, [])

    return (
        <div className={'carList flxCol'}>
            {carList.map( car => <Car car={car} key={car.id}/>)}
        </div>
    )
}
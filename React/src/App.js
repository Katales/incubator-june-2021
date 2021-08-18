import './css/bem.css'
import './css/common.css'
import {CarList} from "./components/CarList/CarList";
import {CarForm} from "./components/CarForm/CarForm";
import {useState} from "react";



function App() {

    let [carId, setCarId] = useState(undefined);
    let [updateSignal, setUpdateSignal] = useState(false);

    const cbRequestUpdate = () => {
        // console.log('Update requested');
        setUpdateSignal(!updateSignal);
    };

    const cbEditCar = (carId) => {
        // console.log('Edit car requested id=', carId);
        setCarId(carId);
    }

    return (
        <div className="taskScreen">
            <CarForm carId={carId} cbRequestUpdate={cbRequestUpdate}/>
            <CarList updateSignal={updateSignal}
                     cbRequestUpdate={cbRequestUpdate}
                     cbEditCar={cbEditCar}
            />
        </div>
    );
}

export default App;

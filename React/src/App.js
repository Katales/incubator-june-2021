import './css/bem.css'
import './css/common.css'
import {CarList} from "./components/CarList/CarList";
import {CarForm} from "./components/CarForm/CarForm";



function App() {


  return (
    <div className="taskScreen">
        <CarForm/>
        <CarList/>
    </div>
  );
}

export default App;

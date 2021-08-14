import './css/bem.css'
import './css/common.css'
import {Users} from "./components/Users/Users";


//Отримати всі user з jsonplaceholder та вивести їх.
// до кожного user зробити кнопку при натисканні якої виводиться всі пости поточного юзера в межах Users компоненти
function App() {
  return (
    <div className="taskScreen">

      <Users/>

    </div>
  );
}

export default App;

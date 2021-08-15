import './css/bem.css'
import './css/common.css'
import {Cmnts} from "./components/Cmnts/Cmnts";
import {Posts} from "./components/Posts/Posts";


function App() {
  return (
      <div>

        {/* 1. Отримати всі ПОСТИ з jsonplaceholder та вивести їх.*/}
        {/* до кожного поста зробити кнопку при натисканні якої виводиться біль детальна інформація про пост в середині Posts компоненти*/}
        <div id="task1" className="taskScreen">
            <p><b>Task 1</b> <br/>
                вивести всі ПОСТИ (кратко), по батону - більш детальна інформація про пост всередині Posts компоненти
            </p>

            <Posts/>

        </div>

        {/* 2. Отримати всі КОММЕНТИ з jsonplaceholder та вивести їх.*/}
        {/* до кожного поста зробити кнопку при натисканні якої виводиться біль детальна інформація про коментар в середині Comments компоненти*/}
        <div id="task2" className="taskScreen">
            <p><b>Task 1</b> <br/>
              Отримати всі КОММЕНТИ (кратко), по батону - більш детальна інформація про коментар всередині Comments компоненти
            </p>

            <Cmnts/>

        </div>


      </div>
  );
}

export default App;

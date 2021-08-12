import './css/bem.css'
import './css/common.css'

import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";


export default function App() {
    return (
        <div>
            <div id="task1" className="taskScreen">
                <p><b>Task 1</b> <br/>
                    отримати всіх ЮЗЕРІВ з плейсхолдеру, та відтворити на сторінці
                </p>

                <Users/>

            </div>

            <div id="task2" className="taskScreen">
                <p><b>Task 2</b> <br/>
                    отримати всі ПОСТИ з плейсхолдеру, та відтворити на сторінці
                </p>

                <Posts/>

            </div>

            <div id="task3" className="taskScreen">
                <p><b>Task 3</b> <br/>
                    отримати всі КОММЕНТИ з плейсхолдеру, та відтворити на сторінці
                </p>

                <Comments/>

            </div>
        </div>
    );
}

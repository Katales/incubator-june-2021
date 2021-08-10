
import './Personage.css'
import {simpsons} from '../Personages';

function Personage ({persNum}) {
    // console.log(persNum.toString());

    return (
        <div key={'0'+persNum.toString()} className="cardPersH w100prc flxRow">
            <div className="descrPers w70prc flxCol">
                <p> Name: <span>{simpsons[persNum].name}</span></p>
                <p> Surname: <span>{simpsons[persNum].surname}</span></p>
                <p> Age: <span>{simpsons[persNum].age}</span></p>
                <p> info: <span>{simpsons[persNum].info}</span>
                </p>
            </div>
            <div className="flxCol w30prc flxCenter">
                <img src={simpsons[persNum].photo} alt=""/>
            </div>
        </div>
    )
};

export default Personage;
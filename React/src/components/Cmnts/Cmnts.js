import {useEffect, useState} from "react";
import {getCmnts} from "../../services/data.connector";
import {CmntLess} from "../CmntLess/CmntLess";
import {CmntMore} from "../CmntMore/CmntMore";

export function Cmnts() {
    let [cmnts, setCmnts] = useState([]);
    useEffect( () => {
        getCmnts().then( cmnts => setCmnts(cmnts));
    }, []);
    return cmnts.map(cmnt =>
            <div className={'comments flxCol'} key={cmnt.id}>
                <CmntLess cmnt={cmnt}/>
                <CmntMore cmnt={cmnt} key={cmnt.id + 'M'}/>
            </div>)
}
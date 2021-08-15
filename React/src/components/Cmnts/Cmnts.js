import {useEffect, useState} from "react";
import {getCmnts} from "../../services/data.connector";
import {CmntLess} from "../CmntLess/CmntLess";
import {CmntMore} from "../CmntMore/CmntMore";

export function Cmnts() {
    let [cmnts, setCmnts] = useState([]);
    let [isShowMore, setIsShowMore] = useState([]);

    useEffect( () => {
        getCmnts().then( cmnts => setCmnts(cmnts));
    }, []);

    const flipIsShowMore = (postId) => {
        const tmpArr = [...isShowMore];
        const newState = tmpArr[postId] = !tmpArr[postId];
        setIsShowMore(tmpArr);
        return newState;
    }

    return (<div className={'comments flxCol'}>
                {cmnts.map(cmnt =>
                    (<div key={cmnt.id}>
                        <CmntLess cmnt={cmnt}
                            isShowCmnt={isShowMore[cmnt.id]}
                            flipIsShowMore={flipIsShowMore}/>
                        {isShowMore[cmnt.id] && <CmntMore cmnt={cmnt}/>}
                    </div>)
                )}
            </div>)
}
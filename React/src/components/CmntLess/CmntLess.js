import "./CmntLess.css"

export function CmntLess({cmnt, isShowCmnt, flipIsShowMore}) {
    const cmntClass = isShowCmnt ? 'commentLess' : 'comment';
    const btnShowMore_txt = isShowCmnt ? 'Show less' : 'Show more'

    function clickBtnShowMore_txt () {
        flipIsShowMore(cmnt.id);
    }

    return (
        <div className={`${cmntClass} dottedBorder flxRow`}>
            <p className={'w90prc'}>
                <b># {cmnt.id}</b>, Name: {cmnt.name}
            </p>
            <button className={'btnCommentShowMore'}
                    onClick={clickBtnShowMore_txt}>
                {btnShowMore_txt}
            </button>
        </div>
    );
}
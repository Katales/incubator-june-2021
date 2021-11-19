/**
 * Remove fields (specified in fieldArr) from userObj
 * @param userObj - manipulated object
 * @param fieldArr - array of strings - fields to remove
 * @returns changed userObj
 */
const rmFields = (userObj, fieldArr) => {
    fieldArr.forEach( el => delete userObj[el]);
    return userObj;
};

module.exports = {
    rmFields
};

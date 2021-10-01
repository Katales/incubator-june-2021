// DEPENDENCIES
const fs = require('fs');
const path = require('path');


// BODY
const dirChkCreate = async (dirPath) => {

    await fs.access(dirPath, (err,stat) => {
        if (err) {
            if (err.code = 'ENOENT') {
                console.log('dirChkCreate> creating dir:', dirPath);
                fs.mkdir(dirPath, err => {
                    console.log(err);
                    return false;
                });
            }
        }
        return true;
    });

}

const createPersonFile = (dirPath, person) => {
    if (dirChkCreate(dirPath)) {
        const personFilePath = path.join(dirPath, person.name + '.json');
        fs.writeFile(personFilePath,
            JSON.stringify(person),
            err => {
                if (err) {
                    console.log('ERROR creating peron\'s file', personFilePath);
                    console.log(err);
                }
            }
        )
    } else {
        console.log(`ERROR: Can't create/access directory ${peoplePath}`);
        return false;
    }
    // console.log (dirPath, person.name + '.json', person);

}

module.exports = {
    dirChkCreate,
    createPersonFile,
}
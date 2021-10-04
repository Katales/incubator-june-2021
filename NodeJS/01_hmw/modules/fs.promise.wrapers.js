// DEPENDENCIES
const fs = require('fs/promises');
const fsc = require('fs').constants;

// BODY
const readDir = async (dirPath) => {
    try {
        return await fs.readdir(dirPath, { withFileTypes: true });
    }catch (e) {
        console.log(`readDir> Error reading ${dirPath}:\n`,e);
        return;
    }
}

const readFile = async (filePath) => {
    try {
        return await fs.readFile(filePath);
    }catch (e) {
        console.log(`moveFile> Error reading file.\n`,e);
        return;
    }
}

const readFileJSON = async (filePath) => {
    try {
        return await JSON.parse( (await readFile(filePath)).toString() );
    }catch (e) {
        console.log(`moveFile> Error reading file.\n`,e);
        return;
    }
}

const renameFile = async (srcFilePath, dstFilePath) => {
    try {
        await fs.rename(srcFilePath, dstFilePath);
        return true;
    }catch (e) {
        console.log(`moveFile> Error renaming/moving file.\n`,e);
        return false;
    }
}


const dirChk = async (dirPath) => {
// check existence of dirPath

    try {
        await fs.access(dirPath, fsc.W_OK);
    }catch(e) {
        console.log(`dirChk> Error checking write access for ${dirPath}:\n`,e);
        return false;
    }
    return true;
}

const dirChkCreate = async (dirPath) => {
// check existence of dirPath, if absent -create one

    try {
        await fs.access(dirPath, fsc.W_OK);
    }catch(e) {
        if (e.code === 'ENOENT') {
            try { // dirPath is not existent - create !
                console.log(`dirChkCreate> creating ${dirPath}:`);
                await fs.mkdir(dirPath);
            }catch(e) {
                console.log(`dirChkCreate> Error creating ${dirPath}:\n`, e);
                return false;
            }
        } else {
            console.log(`dirChkCreate> Error checking write access for ${dirPath}:\n`,e);
            return false;
        }
    }
    return true;
}

// EXPORTS
module.exports = {
    dirChk,
    dirChkCreate,
    readDir,
    readFile,
    readFileJSON,
    renameFile
}
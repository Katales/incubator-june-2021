// -------------------- Array of tasks ---------------------
const tasks = [
    {
        name: 'Snooze the alarm!!!',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Get up!',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Make the bed',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Have a breakfast',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Do the dishes',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Dude, where is my car ?!?',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Commute to work',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Recall my UserID',
        func: function (name) {
            console.log(`\t ${name}`);
            console.log(`\t WTF is my UserID !!!????`);
            const userId = prompt('Pls, enter my UserID:');
            console.log('\t Oh, my Gosh ! My ID is', userId);
        },
        duration: getRandInt(1) / 2
    },
    {
        name: 'Get comments on my post',
        func: async function (name) {
            console.log(`\t ${name}`);
            let comments = await fetch(`https://jsonplaceholder.typicode.com/posts/2/comments`)
                .then(resp => resp.json());
            for (const comment of await comments) {
                console.log(`\tID:${comment.id} Comment:${comment.name}`);
            }
        },
        duration: 0 //getRandInt(1) / 2
    },
    {
        name: 'Let\'s call it a day!',
        func: logTaskName,
        duration: getRandInt(1) / 2
    },
    {
        name: 'Commute home',
        func: logTaskName,
        duration: getRandInt(1) / 2
    }
];
// ---------------------------------------------------------


const firstNick = Date.now();

//-------------------- METHOD 1 (Using promises) --------------------------
let promisePtr;
for (let i = 0; i < tasks.length; i++) {
    promisePtr = queueTask(i, promisePtr);
}

function queueTask(taskNum, currentPromise) {
    if (!currentPromise) {
        return new Promise(function (resolve, reject) {
            const task = tasks[taskNum];
            console.log(`-> New task #${taskNum + 1} (${task.duration} sec) [timer=${timeFromStart()} sec.] ...`);
            setTimeout(async () => {
                await (task.func)(task.name);
                console.log(`... FINISHED [timer=${timeFromStart()} sec.]`)
                resolve(++taskNum);
            }, task.duration * 1_000);
        });
    }

    return currentPromise.then(taskNum => queueTask(taskNum));
}
//-------------------- METHOD 1 (Using promises) --------------------------



// //-------------------- METHOD 2 (Using async/await) --------------------------
//
// main();
//
// async function main () {
//     for (let i = 0; i < tasks.length; i++) {
//         await launchTask(i);
//     }
// }
//
// function launchTask (taskNum) {
//     return new Promise ( function (resolve, reject) {
//         const task = tasks[taskNum];
//         console.log(`-> New task #${taskNum + 1} (${task.duration} sec) [timer=${timeFromStart()} sec.] ...`);
//         setTimeout(async () => {
//             await (task.func)(task.name);
//             console.log(`... FINISHED [timer=${timeFromStart()} sec.]`);
//             resolve();
//         }, task.duration * 1_00);
//     })
// }
// //-------------------- METHOD 2 (Using async/await) --------------------------



// ======================================================================
//      AUX FUNCTIONS
//
function timeFromStart() {
    return ((Date.now() - firstNick) / 1_000);
}

function logTaskName (name) {
    console.log(`\t ${name}`);
}

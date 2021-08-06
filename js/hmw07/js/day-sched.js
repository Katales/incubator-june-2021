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
        func: async function (name) {
            console.log(`\t ${name}`);
            console.log(`\t WTF is my UserID !!!????`);
            const userId = prompt('Pls, enter my UserID:');
            console.log('Oh, my Gosh ! My ID is', userId);
        },
        duration: getRandInt(1) / 2
    },
    {
        name: 'Get comments on my post',
        func: async function (name) {
            console.log(`\t ${name}`);
            await fetch(`https://jsonplaceholder.typicode.com/posts/2/comments`)
                .then(resp => resp.json())
                .then(comments => {
                    for (const comment of comments) {
                        console.log(`\t\tID:${comment.id} Comment:${comment.name}`);
                    }
                });
        },
        duration: getRandInt(1) / 2
    },
    {
        name: 'Let\'s call it a day!',
        func: logTaskName,
        duration: getRandInt(1) / 2
    }
];
// ---------------------------------------------------------


const firstNick = Date.now();

let promisePtr;
for (let i = 0; i < tasks.length; i++) {
    promisePtr = queueTask(i, promisePtr);
}

function queueTask(taskNum, currentPromise) { //v.4.0
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



// ======================================================================
//      AUX FUNCTIONS
//
function timeFromStart() {
    return ((Date.now() - firstNick) / 1_000);
}

function logTaskName (name) {
    console.log(`\t ${name}`);
}

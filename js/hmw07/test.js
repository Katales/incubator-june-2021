// // ---------------------------------------------------------------------
// //      WITHOUT callbacks, Promises, async/await
// // ---------------------------------------------------------------------
//
// let job1res;
// let job2res;
// let job3res;
//
// function job1 () {
//     const timeStart = Date.now();
//     console.log(`(1) Start doing job1`);
//
//     let res;
//     setTimeout( () => {
//         job1res = res = `(job1) done`;
//         const jobTime = (Date.now() - timeStart) / 1_000
//         console.log(`(1) Finished job1 (time taken: ${jobTime} msec)`);
//         return res;
//     }, 500);
// }
//
// function job2 () {
//     const timeStart = Date.now();
//     console.log(`(2) Start doing job2`);
//
//     let res;
//     fetch('https://jsonplaceholder.typicode.com/comments/499')
//         .then(resp => resp.json()).then( resp => job2res = res = resp.email);
//
//     const jobTime = (Date.now() - timeStart) / 1_000
//     console.log(`(2) Finished job2 (time taken: ${jobTime} msec)`);
//     return res;
// }
//
// function job3 () {
//     const timeStart = Date.now();
//     console.log(`(3) Start doing job3`);
//
//     let res;
//     job3res = res = `(job3) done`;
//
//     const jobTime = (Date.now() - timeStart) / 1_000
//     console.log(`(3) Finished job3 (time taken: ${jobTime} msec)`);
//     return res;
// }
//
// console.log(`<1>`, job1());
// console.log(`<2>`, job2());
// console.log(`<3>`, job3());
//
// setTimeout( () => {
//     console.log('<-------------> 0.7 sec later:');
//     console.log(`<1> ${job1res}`);
//     console.log(`<2> ${job2res}`);
//     console.log(`<3> ${job3res}`);
// }, 700);
//
// // ---------------------------------------------------------------------
// // console :
// //  (1) Start doing job1
// //  <1> undefined
// //  (2) Start doing job2
// //  (2) Finished job2 (time taken: 0.002 msec)
// //  <2> undefined
// //  (3) Start doing job3
// //  (3) Finished job3 (time taken: 0 msec)
// //  <3> (job3) done
// //  (1) Finished job1 (time taken: 0.502 msec)
// //  <-------------> 0.7 sec later:
// //  <1> (job1) done
// //  <2> Wilburn_Labadie@araceli.name
// //  <3> (job3) done
// // ---------------------------------------------------------------------



// // ---------------------------------------------------------------------
// //      Promise
// // ---------------------------------------------------------------------
//
// let job1res;
// let job2res;
// let job3res;
//
// function job1 () {
//     return new Promise( (resolve, reject) => {
//         let res;
//         const timeStart = Date.now();
//         console.log(`(1) Start doing job1`);
//
//         setTimeout( () => {
//             res = job1res = `(job1) done`;
//             const jobTime = (Date.now() - timeStart) / 1_000
//             console.log(`(1) Finished job1 (time taken: ${jobTime} msec)`);
//             resolve(res);
//         }, 500);
//     });
// }
//
// function job2 () {
//     return new Promise( (resolve, reject) => {
//         let res;
//         const timeStart = Date.now();
//         console.log(`(2) Start doing job2`);
//
//         fetch('https://jsonplaceholder.typicode.com/comments/499')
//         .then(resp => resp.json())
//         .then( resp => {
//             res = job2res = resp.email;
//             const jobTime = (Date.now() - timeStart) / 1_000
//             console.log(`(2) Finished job2 (time taken: ${jobTime} msec)`);
//             resolve(res)}
//         );
//     });
// }
//
// function job3 () {
//     return new Promise( (resolve, reject) => {
//         let res;
//         const timeStart = Date.now();
//         console.log(`(3) Start doing job3`);
//
//         job3res = res = `(job3) done`;
//         const jobTime = (Date.now() - timeStart) / 1_000
//         console.log(`(3) Finished job3 (time taken: ${jobTime} msec)`);
//         resolve(res);
//     });
// }
//
// job1().then( resp => {
//     console.log(`<1>`, resp)
//     job2().then(resp => {
//         console.log(`<2>`, resp)
//         job3().then(resp => {
//             console.log(`<3>`, resp)
//         })
//     })
// });
//
//
// setTimeout( () => {
//     console.log('<-------------> 0.7 sec later:');
//     console.log(`<1> ${job1res}`);
//     console.log(`<2> ${job2res}`);
//     console.log(`<3> ${job3res}`);
// }, 700);
//
// // ---------------------------------------------------------------------
// // console :
// // (1) Start doing job1
// // (1) Finished job1 (time taken: 0.501 msec)
// // <1> (job1) done
// // (2) Start doing job2
// // (2) Finished job2 (time taken: 0.124 msec)
// // <2> Wilburn_Labadie@araceli.name
// // (3) Start doing job3
// // (3) Finished job3 (time taken: 0.001 msec)
// // <3> (job3) done
// // <-------------> 0.7 sec later:
// // <1> (job1) done
// // <2> Wilburn_Labadie@araceli.name
// // <3> (job3) done
// // --------------------------------------------------------------------



// ---------------------------------------------------------------------
//      async/await
// ---------------------------------------------------------------------

let job1res;
let job2res;
let job3res;

function job1 () {
    return new Promise( (resolve, reject) => {
        let res;
        const timeStart = Date.now();
        console.log(`(1) Start doing job1`);

        setTimeout( () => {
            res = job1res = `(job1) done`;
            const jobTime = (Date.now() - timeStart) / 1_000
            console.log(`(1) Finished job1 (time taken: ${jobTime} msec)`);
            resolve(res);
        }, 500);
    });
}

async function job2 () {
    const timeStart = Date.now();
    console.log(`(2) Start doing job2`);

    let res;
    await fetch('https://jsonplaceholder.typicode.com/comments/499')
        .then(resp => resp.json()).then( resp => job2res = res = resp.email);

    const jobTime = (Date.now() - timeStart) / 1_000
    console.log(`(2) Finished job2 (time taken: ${jobTime} msec)`);
    return res;
}

function job3 () {
    const timeStart = Date.now();
    console.log(`(3) Start doing job3`);

    let res;
    job3res = res = `(job3) done`;

    const jobTime = (Date.now() - timeStart) / 1_000
    console.log(`(3) Finished job3 (time taken: ${jobTime} msec)`);
    return res;
}
async function main () {
    await job1();
    console.log(`<1> ${job1res}`);
    await job2();
    console.log(`<2> ${job2res}`);
    console.log(`<3>`, job3());
}

(main)()

setTimeout( () => {
    console.log('<-------------> 0.7 sec later:');
    console.log(`<1> ${job1res}`);
    console.log(`<2> ${job2res}`);
    console.log(`<3> ${job3res}`);
}, 700);

// ---------------------------------------------------------------------
// console :

// --------------------------------------------------------------------
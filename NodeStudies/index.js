/************************************************************************************/
/******************Teste de prioridade de escalonamento******************************/
/************************************************************************************/
// Promise.resolve().then(() => console.log("promise1 resolved"));
// Promise.resolve().then(() => console.log("promise2 resolved"));
// Promise.resolve().then(() => {
//   console.log("promise3 resolved");
//   process.nextTick(() => {
//     console.log("next tick4 inside promise resolve handler");
//     Promise.resolve().then(() => {
//       console.log("promise6 resolved registered inside of resolve handler3");
//       process.nextTick(() => console.log("next tick6"));
//       Promise.resolve().then(() => console.log("promise7 resolved"));
//       Promise.resolve().then(() => console.log("promise8 resolved"));
//       Promise.resolve().then(() => console.log("promise9 resolved"));
//       Promise.resolve().then(() => console.log("promise10 resolved"));
//       setTimeout(() => console.log("set timeout1"), 0);
//       setImmediate(() => console.log("set immediate1"));
//       setImmediate(() => console.log("set immediate2"));
//     });
//     process.nextTick(() =>
//       console.log("Other next tick5 inside promise resolve handler")
//     );
//   });
// });
// Promise.resolve().then(() => console.log("promise4 resolved"));
// Promise.resolve().then(() => console.log("promise5 resolved"));
// setImmediate(() => console.log("set immediate3"));
// setImmediate(() => console.log("set immediate4"));

// process.nextTick(() => console.log("next tick1"));
// process.nextTick(() => console.log("next tick2"));
// process.nextTick(() => console.log("next tick3"));

// setTimeout(() => console.log("set timeout2"), 0);
// setImmediate(() => console.log("set immediate5"));
// setImmediate(() => console.log("set immediate6"));

// setImmediate(() =>
//   console.log("****************NEW TEST******************\nimmediate1")
// );
// setImmediate(() => {
//   console.log("immediate2");
//   Promise.resolve().then(() => console.log("promise resolve"));
//   teste("Async function 1", 3);
// });
// teste("Async function 2", 3);
// setImmediate(() => console.log("immediate3"));
// setImmediate(() => console.log("immediate4"));
// teste("Async function 3", 3);

// async function teste(strMessage, intQtt) {
//   let iQtt;
//   if (intQtt == undefined) {
//     iQtt = 1;
//   } else {
//     iQtt = intQtt;
//   }
//   for (let iCounter = 0; iCounter < iQtt; iCounter++) {
//     console.log(strMessage);
//     await delayForce(80);
//   }
// }

// async function delayForce(intQtt) {
//   if (intQtt == undefined) {
//     iQtt = 1;
//   } else {
//     iQtt = intQtt;
//   }
//   for (let iCounter = 0; iCounter < iQtt; iCounter++) {
//     // console.log("only a FOR loop");
//   }
// }

/****************************************************************************************************/
/******************************Testa de concorrencia entre loops*************************************/
/****************************************************************************************************/
// function MyLoopFunction(strToPrint) {
//   console.log("MyLoopFunction: " + strToPrint);
//   let iCounter = 0;
//   while (1) {
//     iCounter++;
//     if (iCounter % 50000000 == 0) {
//       console.log("MyLoopFunction: " + strToPrint + " Counter: " + iCounter);
//     }
//   }
// }

// async function MyAsyncFunction(strToPrint) {
//   console.log("MyAsyncFunction: " + strToPrint);
//   await MyLoopFunction(strToPrint);
// }

// process.nextTick();

/*****************************************************************************************/
/**********************************Worker Threads*****************************************/
/*****************************************************************************************/
// const { Worker, isMainThread } = require("worker_threads");

// if (isMainThread) {
//   // This re-loads the current file inside a Worker instance.
//   new Worker(__filename);
// } else {
//   console.log("Inside Worker!");
//   console.log(isMainThread); // Prints 'false'.
// }

const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once("message", message => {
    console.log(message); // Prints 'Hello, world!'.
  });
  worker.postMessage("Hello, world!");
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once("message", message => {
    parentPort.postMessage(message);
  });
}

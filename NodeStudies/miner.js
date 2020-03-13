const { payloads } = require("./payloads.json");
const { Worker, isMainThread, parentPort } = require("worker_threads");
const crypto = require("crypto");
const final = [];
const workersHandler = [];
let fineshedWorkers = 0;
const LEADING_ZEROOES = 4;

if (isMainThread) {
  for (let payload of payloads) {
    const worker = new Worker(__filename, { env: { LEADING_ZEROOES } });
    worker.once("message", message => {
      final.push(message);
      fineshedWorkers++;
      if (fineshedWorkers == payloads.length) {
        console.log(final);
      }
    });
    worker.on("error", console.error);
    console.log(
      `Iniciando worker de ID: ${worker.threadId} e enviando o payload "${payload}"`
    );
    worker.postMessage(payload);
  }
  console.log("isMainThread");
} else {
  console.log("NOT isMainThread");
  parentPort.once("message", message => {
    const payload = message;
    let nonce = 0;
    let generatedHash = "";

    do {
      generatedHash = crypto
        .createHash("sha256")
        .update(payload + nonce)
        .digest("hex");
      nonce++;
    } while (
      generatedHash.slice(0, process.env.LEADING_ZEROOES) !==
      "0".repeat(process.env.LEADING_ZEROES)
    );
    parentPort.postMessage({ payload: message, nonce, hash: generatedHash });
  });
}

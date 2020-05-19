function promiseCreator(timeout, arg) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(arg), timeout);
  });
  return promise;
}

const prom = promiseCreator(500, "Ok!");
prom.then(console.log);

const autocannon = require('autocannon');

(async function () {
  const res = await autocannon({
    url: '127.0.0.1:8080',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10, // default,
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    workers: 3,
    body: '{"exchange":"binance","marketId":"LITCUSDT","side":"buy","quantity":0.2,"price":125}',
  });
  
  
  const resultStr = autocannon.printResult(res)
  console.log(resultStr);
})()

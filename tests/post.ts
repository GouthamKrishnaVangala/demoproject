var http = require("k6/http");

/* export let options = {
    vus: 10,
    duration: "20s"
  }; */

/* export default function() {
  var url = "http://test.loadimpact.com/login";
  var payload = JSON.stringify({ email: "aaa", password: "bbb" });
  var params =  { headers: { "Content-Type": "application/json" } }
  http.post(url, payload, params);
}; */


export default function() {
  var res = http.get("http://httpbin.org");
  console.log("Response time was " + String(res.timings.duration) + " ms");
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function default_1() {
    var res = http.get("http://httpbin.org");
    console.log("Response time was " + String(res.timings.duration) + " ms");
}
exports.default = default_1;
;

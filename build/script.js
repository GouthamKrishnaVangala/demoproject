"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("k6/http");
var { check } = require("k6");
const url = "http://restapi.demoqa.com/utilities/weather/city";
exports.options = {
    stages: [
        { duration: "1s", target: 0 },
        { duration: "10s", target: 50 },
    ],
    /*  vus: 10,
     duration: "30s" */
    thresholds: {
        http_req_duration: ["avg<350", "p(90)<480", "p(95)<500"],
        http_req_connecting: ["avg<40", "min=0", "p(90)<85"]
    },
};
function default_1() {
    const resp = http.get(url + "/bremen");
    // console.log(String(resp.body));
    if (resp.status === 200) {
        console.log("status is 200");
    }
    else {
        console.log("status is not 200 " + resp.status);
    }
    ;
    check(resp, {
        "status is 200": (res) => res.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200,
        /*  "body size is 1176 bytes": (r) => r.body.length !== 1176, */
        "has correct title": (r) => r.body.indexOf("Welcome") !== -1
    });
}
exports.default = default_1;

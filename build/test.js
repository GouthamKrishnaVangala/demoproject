"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const k6_1 = require("k6");
var http = require("k6/http");
var { check } = require("k6");
var { Trend, Rate } = require("k6/metrics");
const url = "https://store.mosaiq.one/";
exports.errorRate = new Rate("errors");
exports.options = {
    stages: [
        { duration: "2s", target: 1 },
        { duration: "2s", target: 2 },
    ],
    thresholds: {
        "errors": ["rate<0.1"],
        http_req_duration: ["avg<200", "p(95)<500"],
    }
};
var myTrend = new Trend("waiting_time");
function default_1() {
    //String s = resp.timings.duration;
    /*  console.log("response time duration: "+String(resp.timings.duration)+" ms" );
     console.log("response time looking up : "+String(resp.timings.looking_up)+" ms" );
     console.log("response time blocked : "+String(resp.timings.blocked)+" ms" );
     console.log("response status: "+(resp.status) );
     console.log("body length: "+(resp.body.length) );  */
    k6_1.group("1st grouping", function () {
        const resp = http.get(url);
        myTrend.add(resp.timings.waiting);
        check(resp, {
            "status": (res) => res.status == 200,
            "body length": (res) => res.body.length <= 13000,
        });
        exports.errorRate.add(!resp);
    });
    k6_1.group("2nd grouping", function () {
        const resp = http.get(url + "/legal/privacy");
        //console.log("body length: "+(resp.body.length) );
        myTrend.add(resp.timings.waiting);
        check(resp, {
            "status": (res) => res.status == 200,
            "body length": (res) => res.body.length <= 78000,
        });
        exports.errorRate.add(!resp);
    });
}
exports.default = default_1;

import { group } from "k6";

var http = require("k6/http");
var { check } = require("k6");
var { Trend, Rate } = require("k6/metrics");

const url = "https://google.com";

export let errorRate = new Rate("errors");

export let options = {
    stages:[
        {duration: "5s", target: 1},
        {duration: "5s", target: 10},
    ],
    thresholds: {
        "errors": ["rate<0.1"],

        http_req_duration: ["avg<200","p(95)<500"],
    }
}


var myTrend = new Trend("waiting_time");
export default function(){
    
    //String s = resp.timings.duration;
   /*  console.log("response time duration: "+String(resp.timings.duration)+" ms" );
    console.log("response time looking up : "+String(resp.timings.looking_up)+" ms" );
    console.log("response time blocked : "+String(resp.timings.blocked)+" ms" );
    console.log("response status: "+(resp.status) );
    console.log("body length: "+(resp.body.length) );  */

    group("1st grouping", function(){
        const resp: any = http.get(url);
    
        myTrend.add(resp.timings.waiting);
        check(resp,{
            "status": (res: { status: number; }) => res.status == 200,
            "body length":(res: { body: string | any[]; }) => res.body.length <= 78000,
        })
        errorRate.add(!resp);
    })
    
group("2nd grouping", function(){
    const resp: any = http.get(url+"/gmail");
    //console.log("body length: "+(resp.body.length) );
    myTrend.add(resp.timings.waiting);
    check(resp,{
        "status": (res: { status: number; }) => res.status == 200,
        "body length":(res: { body: string | any[]; }) => res.body.length <= 13000,
    })
    errorRate.add(!resp);
})
    
}
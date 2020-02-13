"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const k6_1 = require("k6");
var http = require("k6/http");
// Version: 1.2
// Creator: Load Impact v4.0 - k6 JS Test Script Recorder
exports.options = {
    stages: [
        {
            "duration": "10s",
            "target": 10
        },
        {
            "duration": "10s",
            "target": 10
        },
        {
            "duration": "10s",
            "target": 0
        }
    ],
    thresholds: {
        "errors": ["rate<0.1"],
        http_req_duration: ["avg<50", "p(95)<100"],
    },
    maxRedirects: 0,
    discardResponseBodies: true,
};
function default_1() {
    k6_1.group("page_1 - https://mail.google.com/mail/?tab=rm&ogbl", function () {
        let req, res;
        req = [{
                "method": "get",
                "url": "https://mail.google.com/mail/?tab=rm&ogbl",
                "params": {
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Sec-Fetch-User": "?1",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "X-Client-Data": "CI62yQEIpbbJAQjEtskBCKmdygEIy67KAQi8sMoBCPe0ygEIl7XKAQjttcoBGKukygEY67HKARjAusoB",
                        "Sec-Fetch-Site": "none",
                        "Sec-Fetch-Mode": "navigate"
                    }
                }
            }, {
                "method": "get",
                "url": "https://mail.google.com/mail/u/0/?tab=rm&ogbl",
                "params": {
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Sec-Fetch-User": "?1",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "Service-Worker-Navigation-Preload": "true",
                        "X-Client-Data": "CI62yQEIpbbJAQjEtskBCKmdygEIy67KAQi8sMoBCPe0ygEIl7XKAQjttcoBGKukygEY67HKARjAusoB",
                        "Sec-Fetch-Site": "none",
                        "Sec-Fetch-Mode": "navigate"
                    }
                }
            }, {
                "method": "get",
                "url": "https://mail.google.com/mail/u/0/data?tab=rm&ogbl&sw=2&token=%5B%22cftp%22,%2222947e9825%22,%22gmail_fe_200116.15_p3%22,%22ZyMrc6cBAw-rFZnvtXyj5A%5Cu003d%5Cu003d%22,%227393,7158,7418,7584,7500,7027,7414,7172,7030,7655,7618,6984,7137,7591,6792,7164,7332,7018,7113,7546,7189,7150,6969,7278,7433,7495,7636,7236,7468,7467,6821,7272,7569,7016,7407,7156,7348,6804,7657,7403,7443,7416,7419,6807,7634,6929,7565,6999,7068,7708,7711%22,1%5D&dilte=0&gme=1&sme=0",
                "params": {
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "Service-Worker-Navigation-Preload": "true"
                    }
                }
            }, {
                "method": "get",
                "url": "https://mail.google.com/mail/u/0/data?tab=rm&ogbl&sw=2&token=%5B%22cftp%22,%2222947e9825%22,%22gmail_fe_200116.15_p3%22,%22ZyMrc6cBAw-rFZnvtXyj5A%5Cu003d%5Cu003d%22,%227393,7158,7418,7584,7500,7027,7414,7172,7030,7655,7618,6984,7137,7591,6792,7164,7332,7018,7113,7546,7189,7150,6969,7278,7433,7495,7636,7236,7468,7467,6821,7272,7569,7016,7407,7156,7348,6804,7657,7403,7443,7416,7419,6807,7634,6929,7565,6999,7068,7708,7711%22,1%5D&dilte=0&gme=1&sme=0",
                "params": {
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
                    }
                }
            }];
        res = http.batch(req);
        k6_1.sleep(0.65);
    });
    k6_1.group("page_2 - https://mail.google.com/mail/u/0/?tab=rm&ogbl", function () {
        let req, res;
        req = [{
                "method": "post",
                "url": "https://mail.google.com/mail/u/0/jserror?script=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&error=t%60zj4RJ%600&line=Not%20available&txz=p",
                "body": "context.appLifetimeStage=_begin&context.build=gmail_fe_200116.15_p3&context.buildLabel=gmail_fe_200116.15_p3&context.call-stack=Error\n    at j1a (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:1744:108)\n    at ky (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:326)\n    at ly (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:396)\n    at W0a.my [as Ba] (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:435)\n    at d (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:820:291)&context.email=goutham1130@gmail.com&context.fastComposeTearoffsPresent=false&context.fastConvTearoffsPresent=false&context.location=https://mail.google.com/mail/u/0/&context.messageBasedUiEnabled=unknown&context.offlineModeEnabled=false&context.slowTearoff=false&context.splitPaneEnabled=unknown&context.top.location=https://mail.google.com/mail/u/0/?tab=rm&ogbl&context.ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36&context.uaSupported=true&context.userGroup=SAPINTO_PROD&trace=Error: t`zj4RJ`0\n    at https://mail.google.com/mail/u/0/:78:130\n    at d (https://mail.google.com/mail/u/0/:78:397)\n    at HTMLIFrameElement.<anonymous> (https://mail.google.com/mail/u/0/:79:148)",
                "params": {
                    "headers": {
                        "Origin": "https://mail.google.com",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "post",
                "url": "https://mail.google.com/mail/u/0/jserror?script=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&error=t%60a6jdv%600&line=Not%20available&txz=p",
                "body": "context.appLifetimeStage=_begin&context.build=gmail_fe_200116.15_p3&context.buildLabel=gmail_fe_200116.15_p3&context.call-stack=Error\n    at j1a (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:1744:108)\n    at ky (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:326)\n    at ly (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:396)\n    at W0a.my [as Ba] (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:435)\n    at d (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:820:291)&context.email=goutham1130@gmail.com&context.fastComposeTearoffsPresent=false&context.fastConvTearoffsPresent=false&context.location=https://mail.google.com/mail/u/0/&context.messageBasedUiEnabled=unknown&context.offlineModeEnabled=false&context.slowTearoff=false&context.splitPaneEnabled=unknown&context.top.location=https://mail.google.com/mail/u/0/?tab=rm&ogbl&context.ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36&context.uaSupported=true&context.userGroup=SAPINTO_PROD&trace=Error: t`a6jdv`0\n    at https://mail.google.com/mail/u/0/:78:130\n    at d (https://mail.google.com/mail/u/0/:78:397)\n    at HTMLIFrameElement.<anonymous> (https://mail.google.com/mail/u/0/:79:148)",
                "params": {
                    "headers": {
                        "Origin": "https://mail.google.com",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "post",
                "url": "https://mail.google.com/mail/u/0/jserror?script=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&error=t%60VWNrn%600&line=Not%20available&txz=p",
                "body": "context.appLifetimeStage=_begin&context.build=gmail_fe_200116.15_p3&context.buildLabel=gmail_fe_200116.15_p3&context.call-stack=Error\n    at j1a (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:1744:108)\n    at ky (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:326)\n    at ly (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:396)\n    at W0a.my [as Ba] (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:435)\n    at d (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:820:291)&context.email=goutham1130@gmail.com&context.fastComposeTearoffsPresent=false&context.fastConvTearoffsPresent=false&context.location=https://mail.google.com/mail/u/0/&context.messageBasedUiEnabled=unknown&context.offlineModeEnabled=false&context.slowTearoff=false&context.splitPaneEnabled=unknown&context.top.location=https://mail.google.com/mail/u/0/?tab=rm&ogbl&context.ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36&context.uaSupported=true&context.userGroup=SAPINTO_PROD&trace=Error: t`VWNrn`0\n    at https://mail.google.com/mail/u/0/:78:130\n    at d (https://mail.google.com/mail/u/0/:78:397)\n    at HTMLIFrameElement.<anonymous> (https://mail.google.com/mail/u/0/:79:148)",
                "params": {
                    "headers": {
                        "Origin": "https://mail.google.com",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "post",
                "url": "https://mail.google.com/mail/u/0/jserror?script=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&error=t%60Cl6csf%600&line=Not%20available&txz=p",
                "body": "context.appLifetimeStage=_begin&context.build=gmail_fe_200116.15_p3&context.buildLabel=gmail_fe_200116.15_p3&context.call-stack=Error\n    at j1a (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:1744:108)\n    at ky (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:326)\n    at ly (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:396)\n    at W0a.my [as Ba] (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:836:435)\n    at d (https://mail.google.com/_/scs/mail-static/_/js/k=gmail.main.en.uh0t93rNJtY.O/am=X9PPQXhA8BL4sjMCCEAMRqUc9vB_KQX6TA7LA-AhRjQA_R2gDwAAAAAAAAAAAAAAAAAAAPaAxko/d=1/im=1/dg=0/ct=zgms/rs=AHGWq9BJKzUYprki5aJIcdAYQFH4bg1SHg/m=b:820:291)&context.email=goutham1130@gmail.com&context.fastComposeTearoffsPresent=false&context.fastConvTearoffsPresent=false&context.location=https://mail.google.com/mail/u/0/&context.messageBasedUiEnabled=unknown&context.offlineModeEnabled=false&context.slowTearoff=false&context.splitPaneEnabled=unknown&context.top.location=https://mail.google.com/mail/u/0/?tab=rm&ogbl&context.ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36&context.uaSupported=true&context.userGroup=SAPINTO_PROD&trace=Error: t`Cl6csf`0\n    at https://mail.google.com/mail/u/0/:78:130\n    at d (https://mail.google.com/mail/u/0/:78:397)\n    at HTMLIFrameElement.<anonymous> (https://mail.google.com/mail/u/0/:79:148)",
                "params": {
                    "headers": {
                        "Origin": "https://mail.google.com",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://mail.google.com/mail/u/0/?tab=rm&ogbl",
                "params": {
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "Service-Worker-Navigation-Preload": "true",
                        "X-Client-Data": "CI62yQEIpbbJAQjEtskBCKmdygEIy67KAQi8sMoBCPe0ygEIl7XKAQjttcoBGKukygEY67HKARjAusoB",
                        "Sec-Fetch-Site": "same-origin",
                        "Sec-Fetch-Mode": "navigate"
                    }
                }
            }, {
                "method": "post",
                "url": "https://mail.google.com/sync/u/0/st/s?hl=en&c=0",
                "body": "{\"2\":{\"4\":147}}",
                "params": {
                    "headers": {
                        "Origin": "https://mail.google.com",
                        "X-Google-BTD": "1",
                        "X-Framework-Xsrf-Token": "AKwhgQrNq4h9MCkUadN5aluKscq8KLMWgg:1579871296554",
                        "X-Gmail-BTAI": "{\"3\":{\"6\":0,\"10\":1,\"11\":1,\"13\":1,\"15\":0,\"16\":1,\"17\":1,\"22\":1,\"26\":1,\"28\":1,\"29\":0,\"31\":1,\"32\":1,\"33\":1,\"35\":0,\"36\":1,\"43\":0,\"46\":1,\"47\":1,\"49\":1,\"52\":0,\"54\":0,\"55\":0,\"56\":0,\"57\":0,\"58\":0,\"59\":0},\"5\":\"22947e9825\",\"7\":25,\"8\":\"gmail_fe_200116.15_p3\",\"9\":1,\"10\":5,\"11\":\"\",\"12\":3600000,\"13\":\"+01:00\",\"14\":1,\"16\":290765422,\"17\":\"\",\"18\":\"\",\"19\":\"1579873763669\"}",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Drm%26ogbl&scc=1&ltmpl=googlemail&emr=1&osid=1#",
                "params": {
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "X-Chrome-ID-Consistency-Request": "version=1,client_id=77185425430.apps.googleusercontent.com,device_id=3e6a7c0e-db47-4705-97eb-0ec740665732,signin_mode=all_accounts,signout_mode=show_confirmation",
                        "X-Client-Data": "CI62yQEIpbbJAQjEtskBCKmdygEIy67KAQi8sMoBCPe0ygEIl7XKAQjttcoBGKukygEY67HKARjAusoB",
                        "Sec-Fetch-Site": "same-site",
                        "Sec-Fetch-Mode": "navigate"
                    }
                }
            }, {
                "method": "get",
                "url": "https://lh3.googleusercontent.com/-NXTdb_AtPXA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcOoVfJuLKELQflLGxbWDvVknKB5A/s128-c/photo.jpg",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
                    }
                }
            }, {
                "method": "get",
                "url": "https://ssl.gstatic.com/accounts/static/_/js/k=gaia.gaiafe_glif.en.1j035b_6AP0.O/am=jPgBQ50BACJAADwAAAAAAAAEAACGAjyyDhn__3HL2HAb/d=0/ct=zgms/rs=ABkqax106HIiposP_oawLSQkpTMRHwjRPw/m=SF3gsd,NpD4ec,pB6Zqd,rHjpXd,o02Jie,YTxL4,rKsBdb,QLpTOd,lCVo3d,sy7u,uhxrz,oWOlDb,MB66Qc,sy1e,e3RUCc,syas,syat,Zsvhtb,syax,v3lvp",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/googlesans/v14/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://accounts.youtube.com/accounts/CheckConnection?pmpo=https%3A%2F%2Faccounts.google.com&v=-2058923568&timestamp=1579873764292",
                "params": {
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
                    }
                }
            }, {
                "method": "get",
                "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Origin": "https://accounts.google.com",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://ssl.gstatic.com/accounts/static/_/js/k=gaia.gaiafe_glif.en.1j035b_6AP0.O/am=jPgBQ50BACJAADwAAAAAAAAEAACGAjyyDhn__3HL2HAb/d=0/ct=zgms/rs=ABkqax106HIiposP_oawLSQkpTMRHwjRPw/m=syi6,otPmVb,rlNAl",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://ssl.gstatic.com/accounts/static/_/js/k=gaia.gaiafe_glif.en.1j035b_6AP0.O/am=jPgBQ50BACJAADwAAAAAAAAEAACGAjyyDhn__3HL2HAb/d=0/ct=zgms/rs=ABkqax106HIiposP_oawLSQkpTMRHwjRPw/m=sy1d,zExKbb",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "get",
                "url": "https://ssl.gstatic.com/accounts/static/_/js/k=gaia.gaiafe_glif.en.1j035b_6AP0.O/am=jPgBQ50BACJAADwAAAAAAAAEAACGAjyyDhn__3HL2HAb/d=0/ct=zgms/rs=ABkqax106HIiposP_oawLSQkpTMRHwjRPw/m=sy4i,sy4j,signinchooser_view",
                "params": {
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "post",
                "url": "https://play.google.com/log?format=json&hasfast=true",
                "body": "[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,\"en\"]],558,[[\"1579873764000\",null,[],null,null,null,null,\"[[null,[1,\\\"accounts.google.com/ServiceLogin\\\",null,[\\\"https://mail.google.com/mail/u/0/\\\"],false],null,[[-3776188801761207000]]],null,3,[null,\\\"S-938726660:1579873763944589\\\"]]\",null,null,null,null,null,null,null,null,null,null,null,[],1,null,null,null,null,null,[]],[\"1579873764000\",null,[],null,null,null,null,\"[[null,[1,\\\"accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab=rm&ogbl&scc=1&ltmpl=googlemail&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin\\\",null,[\\\"https://mail.google.com/mail/u/0/\\\"],true],null,[[-3776188801761207000]]],null,3,[null,\\\"S-938726660:1579873763944589\\\"]]\",null,null,null,null,null,null,null,null,null,null,null,[],2,null,null,null,null,null,[]]],\"1579873764555\",[],null,null,null,null,null,null,null,null,0]",
                "params": {
                    "headers": {
                        "Origin": "https://accounts.google.com",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                        "Accept": "*/*"
                    }
                }
            }, {
                "method": "post",
                "url": "https://play.google.com/log?format=json&hasfast=true",
                "body": "[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,\"en\"]],558,[[\"1579873764000\",null,[],null,null,null,null,\"[[null,[1,\\\"accounts.google.com/ServiceLogin/signinchooser\\\",null,[\\\"https://mail.google.com/mail/u/0/\\\"],false],null,[[-3776188801761207000]]],null,3,[null,\\\"S-938726660:1579873763944589\\\"]]\",null,null,null,null,null,null,null,null,null,null,null,[],1,null,null,null,null,null,[]],[\"1579873764000\",null,[],null,null,null,null,\"[null,null,3,[null,\\\"S-938726660:1579873763944589\\\"],[\\\"Western Europe\\\",null,\\\"/ServiceLogin/signinchooser\\\",3,358,1,\\\"DE\\\"]]\",null,null,null,null,null,null,null,null,null,null,null,[],2,null,null,null,null,null,[]]],\"1579873764560\",[],null,null,null,null,null,null,null,null,0]",
                "params": {
                    "headers": {
                        "Origin": "https://accounts.google.com",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                        "Accept": "*/*"
                    }
                }
            }];
        res = http.batch(req);
        // Random sleep between 5s and 10s
        k6_1.sleep(Math.floor(Math.random() * 5 + 5));
    });
}
exports.default = default_1;

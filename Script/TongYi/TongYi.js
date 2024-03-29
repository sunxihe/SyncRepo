const $ = new Env('统一');
const TongYi = ($.isNode() ? process.env.TongYi : $.getjson("TongYi")) || [];
!(async () => {
    if (typeof $request != "undefined") {
        await getCookie();
    } else {
        await main();
    }
})().catch((e) => {$.log(e)}).finally(() => {$.done({});});

async function main() {
    for (const item of GuJing) {
        token = item.token;
        memberId = item.memberId;
        console.log(`用户：${memberId}开始任务`)
        //签到
        let signMainInfo = await commonPost("/onecrm/mactivity/sign/misc/sign/activity/c/signMainInfo",{"appid":"wx532ecb3bdaaf92f9","basicInfo":{"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":146,"productInstanceId":3168798957,"productVersionId":"14026","merchantId":2000020692957,"tcode":"weimob","cid":176205957},"extendInfo":{"wxTemplateId":7526,"childTemplateIds":[{"customId":90004,"version":"crm@0.1.11"},{"customId":90002,"version":"ec@42.3"},{"customId":90006,"version":"hudong@0.0.201"},{"customId":90008,"version":"cms@0.0.419"}],"analysis":[],"quickdeliver":{"enable":false},"bosTemplateId":1000001420,"youshu":{"enable":false},"source":1,"channelsource":5,"refer":"onecrm-signgift","mpScene":1089},"queryParameter":{"tracePromotionId":"100039234","tracepromotionid":"100039234"},"i18n":{"language":"zh","timezone":"8"},"pid":"4020112618957","storeId":"0","customInfo":{"source":0,"wid":11068728376},"tracePromotionId":"100039234","tracepromotionid":"100039234"})
        if (signMainInfo.data.hasSign) {
            console.log("已签到")
        } else {
            await $.wait(5000);
            let sign = await commonPost("/onecrm/mactivity/sign/misc/sign/activity/core/c/sign",{"appid":"wx532ecb3bdaaf92f9","basicInfo":{"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":146,"productInstanceId":3168798957,"productVersionId":"14026","merchantId":2000020692957,"tcode":"weimob","cid":176205957},"extendInfo":{"wxTemplateId":7526,"childTemplateIds":[{"customId":90004,"version":"crm@0.1.11"},{"customId":90002,"version":"ec@42.3"},{"customId":90006,"version":"hudong@0.0.201"},{"customId":90008,"version":"cms@0.0.419"}],"analysis":[],"quickdeliver":{"enable":false},"bosTemplateId":1000001420,"youshu":{"enable":false},"source":1,"channelsource":5,"refer":"onecrm-signgift","mpScene":1089},"queryParameter":{"tracePromotionId":"100039234","tracepromotionid":"100039234"},"i18n":{"language":"zh","timezone":"8"},"pid":"4020112618957","storeId":"0","customInfo":{"source":0,"wid":11068728376},"tracePromotionId":"100039234","tracepromotionid":"100039234"})
            console.log(sign)
        }

        //小名
        await lottery({"appid":"wx532ecb3bdaaf92f9","basicInfo":{"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":226,"productInstanceId":3169904957,"productVersionId":"12008","merchantId":2000020692957,"tcode":"weimob","cid":176205957},"extendInfo":{"wxTemplateId":7526,"childTemplateIds":[{"customId":90004,"version":"crm@0.1.11"},{"customId":90002,"version":"ec@42.3"},{"customId":90006,"version":"hudong@0.0.201"},{"customId":90008,"version":"cms@0.0.419"}],"analysis":[],"quickdeliver":{"enable":false},"bosTemplateId":1000001420,"youshu":{"enable":false},"source":1,"channelsource":5,"refer":"hd-lego-index","mpScene":1089},"queryParameter":{"tracePromotionId":"100039234","tracepromotionid":"100039234"},"i18n":{"language":"zh","timezone":"8"},"pid":"4020112618957","storeId":"0","_transformBasicInfo":true,"_requrl":"/orchestration/mobile/prize/getRemainingAssets","templateId":748,"templateKey":"twistEgg","activityId":"30000029178","bussinessType":1,"channel":1,"channelType":1,"source":1,"_version":"2.5.4","activityIdentity":"20","assetTypes":["chance"],"openId":"oBk224m4im1J9PnLUe8AMagujqgM","wid":11068728376,"appId":"wx532ecb3bdaaf92f9","playSourceCode":"lcode","tracePromotionId":"100039234","tracepromotionid":"100039234","vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":226,"productInstanceId":3169904957,"productVersionId":"12008","merchantId":2000020692957,"tcode":"weimob","cid":176205957,"vidTypes":[2],"openid":"oBk224m4im1J9PnLUe8AMagujqgM"})
        //春游
        await lottery({"appid":"wx532ecb3bdaaf92f9","basicInfo":{"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":222,"productInstanceId":3169919957,"productVersionId":"12004","merchantId":2000020692957,"tcode":"weimob","cid":176205957},"extendInfo":{"wxTemplateId":7526,"childTemplateIds":[{"customId":90004,"version":"crm@0.1.11"},{"customId":90002,"version":"ec@42.3"},{"customId":90006,"version":"hudong@0.0.201"},{"customId":90008,"version":"cms@0.0.419"}],"analysis":[],"quickdeliver":{"enable":false},"bosTemplateId":1000001420,"youshu":{"enable":false},"source":1,"channelsource":5,"refer":"hd-lego-index","mpScene":1089},"queryParameter":{"tracePromotionId":"100039234","tracepromotionid":"100039234"},"i18n":{"language":"zh","timezone":"8"},"pid":"4020112618957","storeId":"0","_transformBasicInfo":true,"_requrl":"/orchestration/mobile/activity/info","templateId":"","templateKey":"bigwheel","activityId":"30000028053","bussinessType":1,"channel":1,"channelType":1,"source":1,"_version":"2.5.4","activityIdentity":"20","openId":"oBk224m4im1J9PnLUe8AMagujqgM","wid":11068728376,"appId":"wx532ecb3bdaaf92f9","playSourceCode":"lcode","tracePromotionId":"100039234","tracepromotionid":"100039234","$level":1,"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":222,"productInstanceId":3169919957,"productVersionId":"12004","merchantId":2000020692957,"tcode":"weimob","cid":176205957,"vidTypes":[2],"openid":"oBk224m4im1J9PnLUe8AMagujqgM"})


        //樱花
        await collectCards({"appid":"wx532ecb3bdaaf92f9","basicInfo":{"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":165646,"productInstanceId":3169913957,"productVersionId":"16233","merchantId":2000020692957,"tcode":"weimob","cid":176205957},"extendInfo":{"wxTemplateId":7526,"childTemplateIds":[{"customId":90004,"version":"crm@0.1.11"},{"customId":90002,"version":"ec@42.3"},{"customId":90006,"version":"hudong@0.0.201"},{"customId":90008,"version":"cms@0.0.419"}],"analysis":[],"quickdeliver":{"enable":false},"bosTemplateId":1000001420,"youshu":{"enable":false},"source":1,"channelsource":5,"refer":"hd-card-home","mpScene":1089},"queryParameter":{"tracePromotionId":"100039234","tracepromotionid":"100039234"},"i18n":{"language":"zh","timezone":"8"},"pid":"4020112618957","storeId":"0","activityId":"20001337637","source":1,"_version":"2.9.2","appletVersion":280,"_transformBasicInfo":true,"v":"76e04a82cc9efce6e19336bfddab891410029744","operationSource":4,"tracePromotionId":"100039234","tracepromotionid":"100039234","$level":1,"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":165646,"productInstanceId":3169913957,"productVersionId":"16233","merchantId":2000020692957,"tcode":"weimob","cid":176205957,"vidTypes":[2],"openid":"oBk224m4im1J9PnLUe8AMagujqgM"})
        //雅哈
        await collectCards({"appid":"wx532ecb3bdaaf92f9","basicInfo":{"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":165646,"productInstanceId":3169913957,"productVersionId":"16233","merchantId":2000020692957,"tcode":"weimob","cid":176205957},"extendInfo":{"wxTemplateId":7526,"childTemplateIds":[{"customId":90004,"version":"crm@0.1.11"},{"customId":90002,"version":"ec@42.3"},{"customId":90006,"version":"hudong@0.0.201"},{"customId":90008,"version":"cms@0.0.419"}],"analysis":[],"quickdeliver":{"enable":false},"bosTemplateId":1000001420,"youshu":{"enable":false},"source":1,"channelsource":5,"refer":"hd-card-home","mpScene":1089},"queryParameter":{"tracePromotionId":"100039234","tracepromotionid":"100039234"},"i18n":{"language":"zh","timezone":"8"},"pid":"4020112618957","storeId":"0","activityId":"20001339384","source":1,"_version":"2.9.2","appletVersion":280,"_transformBasicInfo":true,"v":"76e04a82cc9efce6e19336bfddab891410029744","operationSource":4,"tracePromotionId":"100039234","tracepromotionid":"100039234","$level":1,"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":165646,"productInstanceId":3169913957,"productVersionId":"16233","merchantId":2000020692957,"tcode":"weimob","cid":176205957,"vidTypes":[2],"openid":"oBk224m4im1J9PnLUe8AMagujqgM"})

        //查询积分
        await $.wait(5000);
        let getSimpleAccountInfo = await commonPost("/onecrm/point/myPoint/getSimpleAccountInfo",{"appid":"wx532ecb3bdaaf92f9","basicInfo":{"vid":6013753979957,"vidType":2,"bosId":4020112618957,"productId":1,"productInstanceId":3171023957,"productVersionId":"30044","merchantId":2000020692957,"tcode":"weimob","cid":176205957},"extendInfo":{"wxTemplateId":7526,"childTemplateIds":[{"customId":90004,"version":"crm@0.1.11"},{"customId":90002,"version":"ec@42.3"},{"customId":90006,"version":"hudong@0.0.201"},{"customId":90008,"version":"cms@0.0.419"}],"analysis":[],"quickdeliver":{"enable":false},"bosTemplateId":1000001420,"youshu":{"enable":false},"source":1,"channelsource":5,"refer":"cms-usercenter","mpScene":1089},"queryParameter":{"tracePromotionId":"100039234","tracepromotionid":"100039234"},"i18n":{"language":"zh","timezone":"8"},"pid":"4020112618957","storeId":"0","targetBasicInfo":{"productInstanceId":3168798957},"request":{},"tracePromotionId":"100039234","tracepromotionid":"100039234"})
        console.log(`拥有积分: ${getSimpleAccountInfo.data.totalPoint}`)
        $.msg($.name, `用户：${memberId}`, `拥有积分: ${getSimpleAccountInfo.data.totalPoint}`);
    }
}

async function lottery(body) {
    await $.wait(5000);
    let getRemainingAssets = await commonPost("/orchestration/mobile/prize/getRemainingAssets", body);
    let count = getRemainingAssets.data.assets.chance.assetNum;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            await $.wait(5000);
            let play = await commonPost("/orchestration/mobile/activity/draw/play",body)
            let name = play.data.prizes[0].name;
            if (name) {
                if (name.includes("积分")) {
                    console.log(name)
                } else {
                    $.msg($.name, `用户：${memberId}`, `抽奖获得: ${name}`);
                }
            }
        }
    } else {
        console.log("今日抽奖次数已用完")
    }
}

async function collectCards(body) {
    await $.wait(5000);
    let index = await commonPost("/interactive/qianxi/amasscard/api/index", body);
    let arr = {}
    const cards = index.data.theme.cards;
    for (const card of cards) {
        arr[card.cardId] = card.cardName
    }
    console.log(arr)
    let count = index.data.remainCount;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            await $.wait(5000);
            let lightCard = await commonPost("/interactive/qianxi/amasscard/api/lightCard",body)
            let cardId = lightCard.data.cardId;
            console.log(`获得卡片：${arr[cardId]}`)
        }
    } else {
        console.log("今日抽奖次数已用完")
    }
}

async function getCookie() {
    const token = $request.headers["X-WX-Token"];
    if (!token) {
        return
    }
    const body = $.toObj($response.body);
    const memberId = body.data.membershipElementList[0].membershipPlanId;
    const newData = {"memberId": memberId, "token": token}
    const index = TongYi.findIndex(e => e.memberId == newData.memberId);
    if (index !== -1) {
        if (TongYi[index].token == newData.token) {
            return
        } else {
            TongYi[index] = newData;
            $.msg($.name, `🎉用户${newData.memberId}更新token成功!`, ``);
        }
    } else {
        TongYi.push(newData)
        $.msg($.name, `🎉新增用户${newData.memberId}成功!`, ``);
    }
    $.setjson(TongYi, "GuJing");
}

async function commonPost(url,body) {
    return new Promise(resolve => {
        const options = {
            url: `https://xapi.weimob.com/api3${url}`,
            headers: {
                'Connection': 'keep-alive',
                'Content-Length': '1478',
                'x-cmssdk-vidticket': '9376-1711730483.883-saas-w1-1312-27073077770',
                'x-wmsdk-close-store': 'v2',
                'x-apm-page-id': '0faedbf4-2dcf-195a-055c-4dfbf2088e',
                'weimob-pid': '4020112618957',
                'weimob-bosId': '4020112618957',
                'x-wmsdk-bc': '3 1711730363074',
                'x-req-from': 'hd_lego',
                'x-apm-parent-page-id': '0c6bae5c-ec7a-70ea-206a-60f3dfb390',
                'x-page-route': 'hd_lego/index',
                'cloud-bosid': '4020112618957',
                'x-tp-uuid': '0d99bcd03b6465ff57b4fa011e38d1eaae499e51',
                'x-apm-conversation-id': 'c25276e1-0206-7df6-0563-b43404ee7d',
                'x-component-is': 'hd_lego/RAW/components/design-page/design-page',
                'x-wmsdk-vid': '6013753979957',
                'x-biz-id': '226',
                'x-tp-signature': '3dd0d86948f6b0f5eca15f88075d87d75f727e19',
                'cloud-project-name': 'tongyixiangmu',
                'X-WX-Token': '85e14b6972ad1fe3dbb7146eb58cfb349b380d2088a18de67e76214d7023b17709bc67365b958c9faed9b384c6946c9d',
                'Cookie': 'rprm_cuid=1728001288g653gtbbgk',
                'cloud-pid': '4020112618957',
                'parentrpcid': '304dd45191e4530b',
                'x-cms-sdk-request': '1.5.21',
                'wos-x-channel': '0:TITAN',
                'content-type': 'application/json',
                'Accept-Encoding': 'gzip,compress,br,deflate',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.47(0x18002f2c) NetType/WIFI Language/zh_CN',
                'Referer': 'https://servicewechat.com/wx532ecb3bdaaf92f9/191/page-frame.html'
            },
            body: JSON.stringify(body),
        }
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}

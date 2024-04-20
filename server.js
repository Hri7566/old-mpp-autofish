var MPPClient = require('mpp-client-xt');
var client = new MPPClient("wss://www.multiplayerpiano.com:443");
client.start();
client.on("a", (msg) => {
    if (msg.p._id == "451ae5a0bf2623a2ade80399") {
        if ((msg.a.includes("Hri7566")) && (msg.a.includes("caught"))) {
            client.sendArray([{m:'a', message:"/fish"}]);
            client.sendArray([{m:'a', message:"/pick"}]);
            setTimeout(function() {
                client.sendArray([{m:'a', message:"/eat"}]);
            }, 15000);
        }
    }
});
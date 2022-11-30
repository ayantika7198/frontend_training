const websocket = require("ws");
 

const wss = new websocket.Server({port:8088});
let msg = null;

wss.on("connection",(ws)=>{
    console.info("New Client got Connected");

    ws.on('close',()=>{
        console.info("Client Disconnected");
    })

    ws.on('error',()=>{
        console.error("Error Occured");
    })
});
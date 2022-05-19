//node js has built in events module
//own events  can be created , fired, listened 
//registering for the event to be fired only one time using once
// create an event emitter instance and register a couple of callbacks
//Registering for the event with callback paramenters
import { EventEmitter } from "events";
const event = new EventEmitter()
event.on("display",()=>{
    console.log("event 1 is emitted");
});
//emitter object emit named events that calls previously 
//registered listeners to be called 
event.on("display",()=>{
    console.log("event 2 is emitted");
});
event.on("display",()=>{
    console.log("event 3 is emitted");
});
event.on("status",(sc,msg)=>{
    console.log(`status code ${sc} and the page is ${msg}`);
})
event.emit("display");
event.emit("status",200,"ok")
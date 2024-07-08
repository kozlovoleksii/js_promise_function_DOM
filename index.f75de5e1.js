"use strict";
function waitFor(element, eventName) {
    const promise = new Promise((resolve)=>{
        element.addEventListener(eventName, ()=>{
            resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
        });
    });
    return promise;
}
const printMessage = (message)=>{
    const newDiv = document.createElement("div");
    newDiv.classList.add("message");
    newDiv.innerText = message;
    document.body.append(newDiv);
};
const loginField = document.getElementById("login");
const passwordField = document.getElementById("password");
const button = document.getElementById("submit");
waitFor(loginField, "click").then(printMessage);
waitFor(passwordField, "click").then(printMessage);
waitFor(button, "click").then(printMessage);
waitFor(loginField, "input").then(printMessage);
waitFor(passwordField, "input").then(printMessage);
waitFor(loginField, "blur").then(printMessage);
waitFor(passwordField, "blur").then(printMessage);
waitFor(button, "blur").then(printMessage);

//# sourceMappingURL=index.f75de5e1.js.map

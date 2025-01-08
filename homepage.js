//mastest1
let customer1 = {
    "connectARN": "cd54d26a-fee3-4645-87da-6acae50962a5",
    "contactFlowARN": "918bb04e-f3b1-4e07-b101-ebd90191c109"
}

//mastest1instance2
let customer2 = {
    "connectARN": "921b9e21-6d50-4365-b861-297f61227bb8",
    "contactFlowARN": "17279408-5180-472b-a4b0-29691eecd884"
}

customer1Button = document.querySelector("#customer1")
customer2Button = document.querySelector("#customer2")
customer1Button.value = JSON.stringify(customer1)
customer2Button.value = JSON.stringify(customer2)
function redirect(arnObject) {
    let connectARN = arnObject.connectARN;
    let contactFlowARN = arnObject.contactFlowARN;
    location.href = `metrics.html?connectARN=${connectARN}&contactFlowARN=${contactFlowARN}`;
}

function parseARNObject(event) {
    let stringObject = event.target.value;
    let parsedObject = JSON.parse(stringObject)
    redirect(parsedObject)
}
customer1Button.addEventListener("click", parseARNObject)
customer2Button.addEventListener("click", parseARNObject)

window.onload = () => {
    let hash = window.location.hash;
    let token = hash.split("access_token=")[1].split("&")[0];
    sessionStorage.setItem("MetricVisionAccessToken", token)
}



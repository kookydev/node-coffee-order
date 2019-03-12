const fs = require("fs")

const add = (myOrder) => {
    const allOrders = loadJSON();
    allOrders.push(myOrder)
    saveToJson(allOrders);
}

const saveToJson = (allOrders) => {
    const ordersJSON = JSON.stringify(allOrders)
    fs.writeFileSync("orders.json", ordersJSON)
}

const loadJSON = () => {
    try {
        const dataBuffer = fs.readFileSync("orders.json")
        const ordersJSON = dataBuffer.toString()
        console.log(JSON.parse(ordersJSON))
        return JSON.parse(ordersJSON)
    } catch (e) {
        return []
    }
}



const list = () => {
    console.log("hello, I am list")
    const allOrders = loadJSON();
    return (allOrders)
}

const remove = (deletedNote) => {
    const allOrders = loadJSON();
    const ordersdToKeep = allOrders.filter((order) => {
        return order.Item !== deletedNote
    })
    saveToJson(orders)
}


module.exports = {
    add,
    list,
    remove
}
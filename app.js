const yargs = require("yargs")
const orders = require("./orders")
const command = process.argv[2].toLowerCase()



// if (command === "add") {
//     console.log("Adding a order")
// } else if (command === "list") {
//     console.log("Listing all orders")
// } else if (command === "remove") {
//     console.log("Removing order")
// } else if (command === "read") {
//     console.log("Reading order")
// } else {
//     console.log("Unknown command") 
// }

switch (command) {
    case "list":
        orders.list()
        break
    case "remove":
        console.log("Removing order")
        break
    case "add":
        console.log("Adding to order")
        orderObject = {
            name: yargs.argv.name,
            order: yargs.argv.order,
            extra: yargs.argv.extra
        }
        orders.add(orderObject)
        break
    case "read":
        listArray = orders.list()

        readOrder = listArray.filter(order => order.name.toLowerCase() === yargs.argv.name.toLowerCase())
        console.log("Here's the full list")
        console.log(`${readOrder.name}, your order is`)
        break
    default:
        console.log("Unknown command")
}
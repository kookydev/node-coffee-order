const fs = require("fs")

const add = (myNote) => {
    const allNotes = loadJSON();
    allNotes.push({
        Reminder: myNote
    })
    saveToJson(allNotes);
}

const saveToJson = (allNotes) => {
    const notesJSON = JSON.stringify(allNotes)
    fs.writeFileSync("notes.json", notesJSON)
}

const loadJSON = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const notesJSON = dataBuffer.toString()
        console.log(JSON.parse(notesJSON))
        return JSON.parse(notesJSON)
    } catch (e) {
        return []
    }
}

const list = () => {
    console.log("hello, I am list")
    const allNotes = loadJSON();
    allNotes.map((note) => {
        console.log(note.Reminder)
    })
}

const remove = (deletedNote) => {
    const allNotes = loadJSON();
    const notesToKeep = allNotes.filter((note) => {
        return note.Reminder !== deletedNote
    })
    saveToJson(notes)
}


module.exports = {
    add,
    list,
    remove
}
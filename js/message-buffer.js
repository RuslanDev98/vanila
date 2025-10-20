// Buffer message


function render(msg) {
	console.log(msg)
}


function createMessageHandler() {
	const storage = new Map()
	let id = 1
	return (msg) => {
		storage.set(msg.id, msg)
		while (storage.has(id)) {
			render(storage.get(id).text)
			storage.delete(id)
			id = id + 1
		}
	}
}

console.log("message-buffer.js")

const onMessage = createMessageHandler()
onMessage({ id: 1, text: "hi" }); // рендерится сразу
onMessage({ id: 3, text: "how are u" }); // в буфере
onMessage({ id: 2, text: "yo" }); // триггерит рендер 2 и 3
onMessage({ id: 5, text: "yo" }); // ждёт 4
onMessage({ id: 4, text: "yo" }); // триггерит рендер 4 и 5
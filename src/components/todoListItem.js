import { Todos } from '../services/todos.js'

export class TodoListItem {
	#parentEl = null
	#el = null
	#todo = null
	#deleteButton = null
	#doneCheckBox = null
	#onDelete = null

	constructor(parentEl, options) {
		let { todo } = options

		this.#parentEl = parentEl
		this.#todo = todo

		this.#deleteButton = document.createElement('button')
		this.#deleteButton.innerText = 'X'

		this.#onDelete = async (event) => {
			console.log('asdfasdfasdf')
			// let result = await Todos.delete(this.#todo, this.#todo.id)

			// if (result.ok) {
			// 	this.#el.remove()
			// }
		}

		// this.#deleteButton.addEventListener('click', onDelete)

		this.#doneCheckBox = document.createElement('input')
		this.#doneCheckBox.type = 'checkbox'
		this.#doneCheckBox.onchange = async () => {
			let result = await Todos.put(
				{ ...this.#todo, completed: this.#doneCheckBox.checked },
				this.#todo.id
			)

			this.#todo.completed = result.data.completed
		}
	}

	setTodo(todo) {
		this.#todo = todo
	}

	render() {
		let todoEl = document.createElement('div')
		this.#el = todoEl
		this.#el.innerHTML = `
			<h6>${this.#todo.description}</h6>
		`

		todoEl.appendChild(this.#deleteButton)

		this.#doneCheckBox.checked = this.#todo.completed
		todoEl.appendChild(this.#doneCheckBox)

		this.#parentEl.appendChild(todoEl)

		this.#el.innerHTML += `
			<hr/>
		`

		console.log(this.#onDelete)
		
		this.#deleteButton.addEventListener('click', this.#onDelete)
		this.#deleteButton.onclick = this.#onDelete

		console.log(this.#deleteButton.onclick)
	}
}

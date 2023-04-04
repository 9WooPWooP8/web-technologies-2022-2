import Auth from '../services/auth.js'
import { TodoListItem } from '../components/todoListItem.js'

export class TodoList {
	#el = null
	#todos = null
	#todosComponents = []

	constructor(el, todos) {
		this.#el = el
		this.#todos = todos

	}

	setTodos(todos) {
		this.#todos = todos
	}

	render() {
		this.#el.innerHTML = ' '

		this.#todos.forEach((todo) => {
			let todoListItem = new TodoListItem(this.#el, {
				todo: todo,
			})

			this.#todosComponents.push(todoListItem)
		})

		this.#todosComponents.forEach((component) => component.render())
	}
}

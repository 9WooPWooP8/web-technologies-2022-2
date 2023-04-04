import Auth from '../services/auth.js'
import Form from '../components/form.js'
import { TodoList } from '../components/todoList.js'
import { Todos } from '../services/todos.js'
import location from '../services/location.js'
import loading from '../services/loading.js'

const init = async () => {
	const { ok: isLogged } = await Auth.me()

	if (!isLogged) {
		return location.login()
	} else {
		loading.stop()
	}

	const todoListEl = document.getElementById('todo-list')

	const getTodos = async () => {
		return await Todos.getAll()
	}

	let todos = await getTodos()

	const todoList = new TodoList(todoListEl, todos.data)
	todoList.render()

	const onFormSubmit = async (values) => {
		await Todos.post(values)

		let todos = await getTodos()

		todoList.setTodos(todos.data)

		todoList.render()
	}

	const formEl = document.getElementById('todo-form')

	new Form(
		formEl,
		{
			description: (value) => {
				if (value.length < 6) {
					return 'Значение должно быть больше или равно 6'
				} else if (value.length >= 32) {
					return 'Значение должно быть меньше 32'
				}

				return false
			},
		},
		(values) => {
			onFormSubmit(values)
		}
	)
	// create POST /todo { description: string }
	// get get /todo/1 - 1 это id
	// getAll get /todo
	// update put /todo/1 - 1 это id { description: string }
	// delete delete /todo/1 - 1 это id
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init)
} else {
	init()
}

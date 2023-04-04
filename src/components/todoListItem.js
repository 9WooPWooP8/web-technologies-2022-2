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

    this.#el = document.createElement('div')

    this.#deleteButton = document.createElement('button')
    this.#deleteButton.innerText = 'X'

    this.#deleteButton = this.#el.appendChild(this.#deleteButton)

    this.#onDelete = async () => {
      console.log(this.#todo.id)
      let result = await Todos.delete(this.#todo.id)

      if (result.ok) {
        this.#el.remove()
      }
    }

    this.#deleteButton.onclick = this.#onDelete

    this.#el.insertAdjacentHTML('beforeend', '<hr></hr>')

    this.#doneCheckBox = document.createElement('input')
    this.#doneCheckBox.type = 'checkbox'
    this.#doneCheckBox.onchange = async () => {
			this.#deleteButton.disabled = true
			this.#doneCheckBox.disabled = true

      let result = await Todos.put(
        { ...this.#todo, completed: this.#doneCheckBox.checked },
        this.#todo.id
      )

			this.#deleteButton.disabled = false
			this.#doneCheckBox.disabled = false

      this.#todo.completed = result.data.completed
    }
  }

  setTodo(todo) {
    this.#todo = todo
  }

  render() {
    this.#el.innerHTML = `
    	<h6>${this.#todo.description}</h6>
    `

    this.#doneCheckBox.checked = this.#todo.completed

    this.#el.appendChild(this.#doneCheckBox)
    this.#el.appendChild(this.#deleteButton)

    this.#el.insertAdjacentHTML('beforeend', '<hr></hr>')

    this.#parentEl.appendChild(this.#el)
  }
}

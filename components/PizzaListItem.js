export class PizzaListItem {
	constructor(container, pizzaType, onClick) {
		this.container = container
		this.pizzaType = pizzaType
		this.container.onclick = onClick

		this.imageElement = document.createElement('img')
		this.imageElement.src = pizzaType.image
		this.imageElement.classList.add('pizza_list_element__image')

		this.pizzaNameElement = document.createElement('div')
		this.pizzaNameElement.classList.add('pizza_name_element')

		this.pizzaNameElement.textContent = pizzaType.name

		this.container.appendChild(this.imageElement)
		this.container.appendChild(this.pizzaNameElement)
	}

	render() {
		return this.container
	}
}

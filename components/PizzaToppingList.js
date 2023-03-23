import { PizzaToppingListItem } from './PizzaToppingListItem.js'

export class PizzaToppingList {
	constructor(
		pizzaToppingListContainer,
		pizzaToppingTypes,
		onPizzaToppingChange
	) {
		this.pizzaToppingListContainer = pizzaToppingListContainer
		this.pizzaToppingTypes = pizzaToppingTypes
		this.pizzaToppingComponents = []

		this.pizzaToppingTypes.forEach((pizzaToppingType) => {
			let pizzaToppingContainer = document.createElement('button')
			pizzaToppingContainer.classList.add('pizza_topping_selector__item')

			this.pizzaToppingListContainer.appendChild(pizzaToppingContainer)

			let pizzaToppingComponent = new PizzaToppingListItem(
				pizzaToppingContainer,
				pizzaToppingType,
				onPizzaToppingChange
			)

			this.pizzaToppingComponents.push(pizzaToppingComponent)
		})
	}

	render() {
		this.pizzaToppingComponents.forEach((pizzaElement) => {
			pizzaElement.render()
		})

		return this.selectorContainer
	}
}

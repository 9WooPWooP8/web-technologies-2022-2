import { PizzaToppingListItem } from './PizzaToppingListItem.js'

export class PizzaToppingList {
	constructor(options) {
		this.el = document.createElement('div')
		this.el.classList.add('pizza-topping-selector')

		this.pizzaToppingTypes = options.pizzaToppingTypes
		this.pizzaToppingComponents = []

		this.pizzaToppingTypes.forEach((pizzaToppingType) => {
			let pizzaToppingComponent = new PizzaToppingListItem({
				toppingType: pizzaToppingType,
				onClick: options.onPizzaToppingsSelect,
			})

			this.pizzaToppingComponents.push(pizzaToppingComponent)
		})
	}

	render() {
		this.el.innerHTML = `
			${this.renderChildren()}
		`

		return this.el.outerHTML
	}

	renderChildren() {
		return this.pizzaToppingComponents
			.map((pizzaToppingComponent) => pizzaToppingComponent.render())
			.join(' ')
	}
}

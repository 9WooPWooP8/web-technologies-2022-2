import { PizzaListItem } from './PizzaListItem.js'

export class PizzaList {
	constructor(options) {
		this.el = document.createElement('div')
		this.el.classList.add('pizza-list')
		this.pizzaTypes = options.pizzaTypes
		this.pizzaComponents = []

		let onPizzaClick = (pizzaType) => {
			this.pizzaComponents.forEach((pizzaComponent) => {
				pizzaComponent.setSelected(false)
			})

			console.log('click??/')

			options.onPizzaChange(pizzaType)
		}

		this.pizzaTypes.forEach((pizzaType) => {
			let pizzaComponent = new PizzaListItem({
				pizzaType: pizzaType,
				onClick: onPizzaClick,
			})

			this.pizzaComponents.push(pizzaComponent)
		})
	}

	render() {
		this.el.innerHTML = `
			${this.renderChildren()}
		`

		return this.el.outerHTML
	}

	renderChildren() {
		return this.pizzaComponents
			.map((pizzaComponent) => pizzaComponent.render())
			.join(' ')
	}
}

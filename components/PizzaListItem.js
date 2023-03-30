export class PizzaListItem {
	constructor(options) {
		this.el = document.createElement('button')
		this.el.classList.add('pizza-list-item')

		this.selected = options.selected || false
		this.pizzaType = options.pizzaType

		this.el.onclick = () => {
			options.onClick(this.pizzaType)
			console.log('click??')
			this.selected = true
		}
	}

	setSelected(state) {
		this.selected = state
	}

	render() {
		if (this.selected) {
			this.el.classList.add('pizza-list-item--active')
		} else {
			this.el.classList.remove('pizza-list-item--active')
		}

		this.el.innerHTML = `
				<img src="${this.pizzaType.image}" class="pizza-list-item__image">
				</img>
				<div class="pizza-list-item__name">
					${this.pizzaType.name}
				</div>
		`

		return this.el.outerHTML
	}
}

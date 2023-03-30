export class PizzaToppingListItem {
	constructor(options) {
		this.el = document.createElement('button')
		this.el.classList.add('pizza-topping-selector__item')
		this.toppingType = options.toppingType
		this.selected = false

		this.el.onclick = () => {
			this.selected = true

			options.onClick(this.toppingType)
		}
	}

	render() {
		if (this.selected)
			this.el.classList.add('pizza-topping-selector__item--active')
		else {
			this.el.classList.remove('pizza-topping-selector__item--active')
		}

		this.el.innerHTML = `
			<img 
				src="${this.toppingType.image}" 
				class="pizza-topping-selector__item__image"
			>
			</img>
			<div 
				class="pizza-topping-selector__item__name"
			>
				${this.toppingType.name}
			</div>
		`

		return this.el.outerHTML
	}
}

export class PizzaToppingListItem {
	constructor(container, toppingType, onClick) {
		this.container = container
		this.toppingType = toppingType
		this.container.onclick = () => {
			if (
				this.container.classList.contains(
					'pizza_topping_selector__item--active'
				)
			) {
				this.container.classList.remove('pizza_topping_selector__item--active')
			} else {
				this.container.classList.add('pizza_topping_selector__item--active')
			}

			onClick(this.toppingType)
		}

		this.pizzaToppingImageElement = document.createElement('img')
		this.pizzaToppingImageElement.src = toppingType.image
		this.pizzaToppingImageElement.classList.add(
			'pizza_topping_selector__item__image'
		)

		this.pizzaToppingNameElement = document.createElement('div')
		this.pizzaToppingNameElement.classList.add(
			'pizza_topping_selector__item__name'
		)

		this.pizzaToppingNameElement.textContent = toppingType.name

		this.container.appendChild(this.pizzaToppingImageElement)
		this.container.appendChild(this.pizzaToppingNameElement)
	}

	render() {
		return this.container
	}
}

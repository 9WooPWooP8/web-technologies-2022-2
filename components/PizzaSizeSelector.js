export class PizzaSizeSelector {
	constructor(selectorContainer, pizzaSizes, onSizeChange) {
		this.selectorContainer = selectorContainer
		this.bigSizeButton = document.createElement('button')
		this.smallSizeButton = document.createElement('button')

		this.smallPizzaSize = pizzaSizes[0]
		this.bigPizzaSize = pizzaSizes[1]

		this.selectorContainer.appendChild(this.smallSizeButton)
		this.selectorContainer.appendChild(this.bigSizeButton)

		this.smallSizeButton.classList.add('pizza_size_selector__button')
		this.smallSizeButton.classList.add('pizza_size_selector__button--active')
		this.bigSizeButton.classList.add('pizza_size_selector__button')

		this.smallSizeButton.textContent = "Маленькая"
		this.bigSizeButton.textContent = "Большая"

		onSizeChange(this.smallPizzaSize)

		this.smallSizeButton.onclick = function() {
			this.smallSizeButton.classList.add('pizza_size_selector__button--active')
			this.bigSizeButton.classList.remove('pizza_size_selector__button--active')
			onSizeChange(this.smallPizzaSize)
		}.bind(this)

		this.bigSizeButton.onclick = function() {
			this.bigSizeButton.classList.add('pizza_size_selector__button--active')
			this.smallSizeButton.classList.remove('pizza_size_selector__button--active')
			onSizeChange(this.bigPizzaSize)
		}.bind(this)
	}

	render() {
		return this.selectorContainer
	}
}

class PizzaSizeSelectorButton {
	constructor(options) {
		this.el = document.createElement('button')
		this.el.classList.add('pizza-size-selector__button')

		this.pizzaSize = options.pizzaSize
		this.selected = options.selected || false
		this.text = options.text

		this.el.onclick = () => {
			console.log('asdfasdfasdfasdfasdfasdfasdf')
			// options.onClick(this.smallPizzaSize)
			// this.setSelected(true)
		}
	}

	setSelected(value) {
		this.selected = value
	}

	render() {
		if (this.selected) {
			this.el.classList.add('pizza-size-selector__button--active')
		} else {
			this.el.classList.remove('pizza-size-selector__button--active')
		}

		this.el.innerText = this.text

		return this.el.outerHTML
	}
}

export class PizzaSizeSelector {
	constructor(options) {
		this.el = document.createElement('div')
		this.el.classList.add('size-selector-wrapper')

		this.pizzaSizes = options.pizzaSizes

		let onButtonClick = (pizzaSize) => {
			buttons.forEach((button) => button.setSelected(false))
			options.onSizeChange(pizzaSize)

			this.render()
		}

		let smallSizeButton = new PizzaSizeSelectorButton({
			text: 'Маленькая',
			selected: true,
			pizzaSize: this.pizzaSizes[0],
			onClick: onButtonClick,
		})

		let bigSizeButton = new PizzaSizeSelectorButton({
			text: 'Большая',
			selected: false,
			pizzaSize: this.pizzaSizes[1],
			onClick: onButtonClick,
		})

		this.buttons = [smallSizeButton, bigSizeButton]
	}

	renderButtons() {
		return this.buttons.map((button) => button.render()).join(' ')
	}

	render() {
		this.el.innerHTML = `
				<div class="size-selector-title">
					<div class="size-selector-wrapper-title__text">Выберите Размер</div>
					<img class="size-selector-wrapper-title__icon"></img>
				</div>
				<div class="pizza-size-selector">
					${this.renderButtons()}
				</div>
		`

		return this.el.outerHTML
	}
}

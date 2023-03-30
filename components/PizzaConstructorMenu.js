import { PizzaSizeSelector } from './PizzaSizeSelector.js'
import { Pizza } from '../js/pizza.js'
import { PizzaList } from './PizzaList.js'
import { PizzaToppingList } from './PizzaToppingList.js'
import { AddToCartButton } from './AddToCartButton.js'

export class PizzaConstructorMenu {
	constructor(el, options) {
		this.el = el
		this.pizzaTypes = options.pizzaTypes
		this.pizzaToppings = options.pizzaToppings
		this.pizzaSizes = options.pizzaSizes

		this.constructedPizza = new Pizza(this.pizzaTypes[0], this.pizzaSizes[0])

		let getData = () => {
			return {
				price: this.constructedPizza.calculatePrice(),
				calories: this.constructedPizza.calculatePrice(),
			}
		}

		this.addToCartButton = new AddToCartButton(getData)

		this.onSizeChange = (newPizzaSize) => {
			this.constructedPizza.setPizzaSize(newPizzaSize)

			this.render()
		}

		this.onPizzaTypeChange = (newPizzaType) => {
			this.constructedPizza.setPizzaType(newPizzaType)

			console.log('click')

			this.render()
		}

		this.onPizzaToppingSelect = (newPizzaTopping) => {
			if (this.constructedPizza.getToppings().includes(newPizzaTopping)) {
				this.constructedPizza
					.getToppings()
					.splice(
						this.constructedPizza.getToppings().indexOf(newPizzaTopping),
						1
					)
			} else {
				this.constructedPizza.addTopping(newPizzaTopping)
			}

			this.render()
		}

		this.pizzaSizeSelector = new PizzaSizeSelector({
			pizzaSizes: this.pizzaSizes,
			onSizeChange: this.onSizeChange,
		})

		this.pizzasListComponent = new PizzaList({
			pizzaTypes: this.pizzaTypes,
			onPizzaChange: this.onPizzaTypeChange,
		})

		this.pizzaToppingListComponent = new PizzaToppingList({
			pizzaToppingTypes: this.pizzaToppings,
			onPizzaToppingSelect: this.onPizzaToppingSelect,
		})
	}

	render() {
		this.el.innerHTML = `
				${this.pizzasListComponent.render()}
				<div class="pizza-menu__addons">
					${this.pizzaSizeSelector.render()}
					<div class="topping-selector-wrapper">
						<div class="topping_selector_title">
							Добавить по вкусу
						</div>
					${this.pizzaToppingListComponent.render()}
					</div>
					${this.addToCartButton.render()}
				</div>
		`
	}
}

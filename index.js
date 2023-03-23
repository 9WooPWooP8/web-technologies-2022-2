import { PizzaSizeSelector } from './components/PizzaSizeSelector.js'
import { PizzaType, PizzaTopping, Pizza, PizzaSize } from './js/pizza.js'
import { PizzaList } from './components/PizzaList.js'
import { PizzaToppingList } from './components/PizzaToppingList.js'
import { pizzaToppings, pizzaTypes, pizzaSizes } from './js/pizzaData.js'

class PizzaConstructorMenu {
	constructor(pizzaTypes, pizzaToppings, pizzaSizes) {
		this.pizzaTypes = pizzaTypes
		this.pizzaToppings = pizzaToppings
		this.pizzaSizes = pizzaSizes

		this.constructedPizza = new Pizza(pizzaTypes[0], pizzaSizes[0])

		this.addToCartButton = document.getElementsByClassName('add_to_cart')[0]

		this.setTotalPrice = (price, calories) => {
			this.addToCartButton.textContent = `Добавить в корзину за ${price}(${calories} кКал)`
		}

		this.onSizeChange = (newPizzaSize) => {
			constructedPizza.setPizzaSize(newPizzaSize)
			setTotalPrice(
				constructedPizza.calculatePrice(),
				constructedPizza.calculateCalories()
			)
		}

		this.onPizzaTypeChange = (newPizzaType) => {
			constructedPizza.setPizzaType(newPizzaType)
			setTotalPrice(
				constructedPizza.calculatePrice(),
				constructedPizza.calculateCalories()
			)
		}

		this.onPizzaToppingSelect = (newPizzaTopping) => {
			if (constructedPizza.getToppings().includes(newPizzaTopping)) {
				constructedPizza
					.getToppings()
					.splice(constructedPizza.getToppings().indexOf(newPizzaTopping), 1)
			} else {
				constructedPizza.addTopping(newPizzaTopping)
			}

			setTotalPrice(
				constructedPizza.calculatePrice(),
				constructedPizza.calculateCalories()
			)
		}

		let pizzaSizeSelectorElement = document.getElementsByClassName(
			'pizza_size_selector'
		)[0]

		this.pizzaSizeSelector = new PizzaSizeSelector(
			pizzaSizeSelectorElement,
			pizzaSizes,
			this.onSizeChange
		)

		let pizzaListElementContainer =
			document.getElementsByClassName('pizza_list')[0]

		this.pizzasListComponent = new PizzaList(
			pizzaListElementContainer,
			pizzaTypes,
			this.onPizzaTypeChange
		)

		let pizzaToppingListComponentContainer = document.getElementsByClassName(
			'pizza_topping_selector'
		)[0]

		this.pizzaToppingListComponent = new PizzaToppingList(
			pizzaToppingListComponentContainer,
			pizzaToppings,
			this.onPizzaToppingSelect
		)

		this.pizzaSizeSelector.render()
		this.pizzasListComponent.render()
		this.pizzaToppingListComponent.render()
	}
}

menu = new PizzaConstructorMenu(pizzaTypes, pizzaToppings, pizzaSizes)

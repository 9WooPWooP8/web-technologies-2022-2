export class PizzaSize {
	constructor(name, price, calories) {
		this.name = name
		this.price = price
		this.calories = calories
	}
}

export class PizzaTopping {
	constructor(name, priceBig, priceSmall, caloriesBig, caloriesSmall, image) {
		this.name = name
		this.priceBig = priceBig
		this.priceSmall = priceSmall
		this.caloriesBig = caloriesBig
		this.caloriesSmall = caloriesSmall
		this.image = image
	}
}

export class PizzaType {
	constructor(name, calories, price, image) {
		this.name = name
		this.calories = calories
		this.price = price
		this.image = image
	}
}

export class Pizza {
	constructor(pizzaType, size) {
		this.pizzaType = pizzaType
		this.size = size

		this.toppings = []
	}

	getToppings() {
		return this.toppings
	}

	getSize() {
		return this.size
	}

	getStuffing() {
		return this.pizzaType.name
	}

	calculateCalories() {
		let sum = this.pizzaType.calories + this.size.calories

		if (this.size.name === 'small') {
			this.toppings.forEach((value) => {
				sum += value.caloriesSmall
			})
		} else if (this.size.name === 'big') {
			this.toppings.forEach((value) => {
				sum += value.caloriesBig
			})
		}

		return sum
	}

	calculatePrice() {
		let sum = this.pizzaType.price + this.size.price

		if (this.size.name === 'small') {
			this.toppings.forEach((value) => {
				sum += value.priceSmall
			})
		} else if (this.size.name === 'big') {
			this.toppings.forEach((value) => {
				sum += value.priceBig
			})
		}

		return sum
	}

	setPizzaSize(pizzaSize) {
		this.size = pizzaSize
	}

	setPizzaType(pizzaType) {
		this.pizzaType = pizzaType
	}

	addTopping(topping) {
		this.toppings.push(topping)
	}

	removeTopping(topping) {
		let removedToppingIndex = this.toppings.indexOf(topping)

		if (removedToppingIndex > -1) {
			this.toppings.splice(removedToppingIndex, 1)
		}
	}
}

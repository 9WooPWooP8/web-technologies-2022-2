class PizzaSize {
	constructor(name, price, calories) {
		this.name = name
		this.price = price
		this.calories = calories
	}
}

let smallPizzaSize = new PizzaSize('small', 100, 100)
let bigPizzaSize = new PizzaSize('big', 200, 200)

class PizzaTopping {
	constructor(name, priceBig, priceSmall, caloriesBig, caloriesSmall) {
		this.name = name
		this.priceBig = priceBig
		this.priceSmall = priceSmall
		this.caloriesBig = caloriesBig
		this.caloriesSmall = caloriesSmall
	}
}

let mozzarella = new PizzaTopping('mozzarella', 100, 50, 0, 0)
let cheeseBort = new PizzaTopping('cheese bort', 300, 150, 50, 50)
let cheddarAndParmesan = new PizzaTopping(
	'cheddar and parmesan',
	300,
	150,
	50,
	50
)

class PizzaType {
	constructor(name, calories, price) {
		this.name = name
		this.calories = calories
		this.price = price
	}
}

class Pizza {
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

		if (this.size === smallPizzaSize) {
			this.toppings.forEach((value) => {
				sum += value.caloriesSmall
			})
		} else if (this.size === bigPizzaSize) {
			this.toppings.forEach((value) => {
				sum += value.caloriesBig
			})
		}

		return sum
	}

	calculatePrice() {
		let sum = this.pizzaType.price + this.size.price

		if (this.size === smallPizzaSize) {
			this.toppings.forEach((value) => {
				sum += value.priceSmall
			})
		} else if (this.size === bigPizzaSize) {
			this.toppings.forEach((value) => {
				sum += value.priceBig
			})
		}

		return sum
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

let margaritta = new PizzaType('margaritta', 300, 500)
let pepperoni = new PizzaType('pepperoni', 400, 800)
let bavarskaya = new PizzaType('pepperoni', 450, 700)

let bigMargaritta = new Pizza(margaritta, bigPizzaSize)
let smallPepperoni = new Pizza(pepperoni, smallPizzaSize)
let bigBavarskaya = new Pizza(bavarskaya, bigPizzaSize)

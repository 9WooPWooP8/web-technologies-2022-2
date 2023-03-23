import { PizzaSizeSelector } from './components/PizzaSizeSelector.js'
import { PizzaType, PizzaTopping, Pizza, PizzaSize } from './js/pizza.js'
import { PizzaList } from './components/PizzaList.js'
import { PizzaToppingList } from './components/PizzaToppingList.js'

let smallPizzaSize = new PizzaSize('small', 100, 100)
let bigPizzaSize = new PizzaSize('big', 200, 200)

export const pizzaSizes = [smallPizzaSize, bigPizzaSize]

let margaritta = new PizzaType(
	'Маргаритта',
	300,
	500,
	'./assets/images/margaritta.jpeg'
)
let pepperoni = new PizzaType(
	'Пепперони',
	400,
	800,
	'./assets/images/pepperoni.jpeg'
)
let bavarskaya = new PizzaType(
	'Баварская',
	450,
	700,
	'./assets/images/bavarskaya.jpeg'
)

export const pizzaTypes = [margaritta, pepperoni, bavarskaya]

let mozzarella = new PizzaTopping(
	'Моцарелла',
	100,
	50,
	0,
	0,
	'../assets/images/mozarella.png'
)
let cheeseBort = new PizzaTopping(
	'Сырный борт',
	300,
	150,
	50,
	50,
	'../assets/images/cheese_bort.png'
)
let cheddarAndParmesan = new PizzaTopping(
	'Чеддер и пармезан',
	300,
	150,
	50,
	50,
	'../assets/images/halapenjo.png'
)

export const pizzaToppings = [mozzarella, cheeseBort, cheddarAndParmesan]

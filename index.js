import { pizzaToppings, pizzaTypes, pizzaSizes } from './js/pizzaData.js'
import { PizzaConstructorMenu } from './components/PizzaConstructorMenu.js'

let rootEl = document.getElementsByClassName('pizza-menu-root')[0]

const menu = new PizzaConstructorMenu(rootEl, {
	pizzaTypes: pizzaTypes,
	pizzaToppings: pizzaToppings,
	pizzaSizes: pizzaSizes,
})
console.log(rootEl)
menu.render()
console.log(rootEl)



import { pizzaToppings, pizzaTypes, pizzaSizes } from './js/pizzaData.js'
import { PizzaConstructorMenu } from './components/PizzaConstructorMenu.js'

const menu = new PizzaConstructorMenu(pizzaTypes, pizzaToppings, pizzaSizes)

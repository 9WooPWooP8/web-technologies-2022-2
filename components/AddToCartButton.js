export class AddToCartButton {
	constructor(getData) {
		this.el = document.createElement('button')
		this.el.classList.add('add-to-cart')

		this.getData = getData
	}

	render() {
		let data = this.getData()

		this.el.innerText = `Добавить в корзину за ${ data.price } (${ data.calories } кКал)`

		return this.el.outerHTML
	}
}

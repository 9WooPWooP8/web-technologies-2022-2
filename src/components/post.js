export class Post {
	#el = null
	#post = null
	#postComments = null
	#getComments = null
	#getPost = null
	#postId = null

	constructor(el, options) {
		let { getPost, getComments } = options
		this.#el = el
		this.#getPost = getPost
		this.#getComments = getComments
	}

	async init() {
		const url = new URL(window.location.href)
		// let splittedUrl = url.pathname.split('/')
		// let postId = splittedUrl.pop() || splittedUrl.pop()
		let postId = url.searchParams.get('id')

		this.#postId = postId

		await this.loadItems()
	}

	async loadItems() {
		try {
			let post = await this.#getPost(this.#postId)
			let postComments = await this.#getComments(this.#postId)

			this.#post = post
			this.#postComments = postComments

			this.renderPost()
		} catch (error) {
			document.location.href = "/error.html"
			console.log(error)
		}
	}

	renderPost() {
		this.#el.innerHTML = `
			<h3>${this.#post.title}</h3>
			<div>${this.#post.body}</div>
			<br/>
			${this.renderComments()}
    `
	}

	renderComment(comment) {
		return `
			<div>
				<h5>${comment.name}</h5>
				<p>${comment.body}</p>
			</div>
			<hr/>
		`
	}

	renderComments() {
		return `
			<h3>Comments</h3>
			<div>
				${this.#postComments.map((comment) => this.renderComment(comment)).join(' ')}
			</div>
		`
	}
}

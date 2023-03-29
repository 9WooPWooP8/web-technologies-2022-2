import { Post } from './src/components/post.js'

const getPost = async (postId) => {
	let result = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	)

	let body = result.json()

	return body
}

const getComments = async (postId) => {
	let result = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	)

	let body = result.json()

	return body
}

const init = async () => {
	const postEl = document.getElementById('post')

	await new Post(postEl, {
		getPost: getPost,
		getComments: getComments,
	}).init()
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init)
} else {
	await init()
}

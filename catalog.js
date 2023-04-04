import { Catalog } from './src/components/catalog.js'

const renderPostItem = (item) => `
    <a  
        href="posts.html?id=${item.id}"
        class="post-item"
    >
        <span class="post-item__title">
            ${item.title}
        </span>

        <span class="post-item__body">
            ${item.body}
        </span>
    </a>
`

const getPostItems = async ({ limit, page }) => {
	let result = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
	)

	const total = +result.headers.get('x-total-count')
	const items = await result.json()

	return { items, total }
}

const renderPhotoItem = (item) => `
    <a  
        href="photos/${item.id}"
        class="photo-item"
    >
        <span class="photo-item__title">
            ${item.title}
        </span>

        <img 
            src=${item.url}
            class="photo-item__image"
        >
    </a>
`

const getPhotoItems = async ({ limit, page }) => {
	let result = await fetch(
		`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`
	)

	const total = +result.headers.get('x-total-count')
	const items = await result.json()

	return { items, total }
}

const init = async () => {
	const catalog = document.getElementById('catalog')
	const newCatalog = new Catalog(catalog, {
		renderItem: renderPostItem,
		getItems: getPostItems,
	})

	await newCatalog.init()
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init)
} else {
	await init()
}

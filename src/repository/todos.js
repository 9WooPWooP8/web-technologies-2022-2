import api from '../services/api.js'

export const TodoRepository = {
	async getAll() {
		return await api('/todo', {
			method: 'GET',
		})
	},

	async get(todoId) {
		return await api('/todo', {
			method: 'GET',
		})
	},

	async put(values, todoId) {
		return await api(`/todo/${todoId}`, {
			method: 'PUT',
			body: JSON.stringify(values),
		})
	},

	async post(values) {
		return await api('/todo', {
			method: 'POST',
			body: JSON.stringify(values),
		})
	},

	async delete(todoId) {
		return await api(`/todo/${todoId}`, {
			method: 'DELETE',
		})
	},
}

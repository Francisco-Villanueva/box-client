import { types } from 'mobx-state-tree'

export const DateStore = types
	.model({
		date: types.Date,
	})
	.views((store) => ({
		get date_DMY() {
			const day = store.date.getDate().toString()
			const month = (store.date.getMonth() + 1).toString() // Los meses comienzan desde 0
			const year = store.date.getFullYear().toString().substr(-2)
			return `${day}/${month}/${year}`
		},
		get date_YMD() {
			let day = store.date.getDate().toString()
			if (day.length === 1) {
				day = '0' + day
			}
			let month = (store.date.getMonth() + 1).toString() // Los meses comienzan desde 0
			if (month.length === 1) {
				month = '0' + month
			}
			const year = store.date.getFullYear().toString()
			return `${year}-${month}-${day}`
		},
		get month() {
			const MONTHS = [
				'Enero',
				'Febrero',
				'Marzo',
				'Abril',
				'Mayo',
				'Junio',
				'Julio',
				'Agosto',
				'Septiembre',
				'Octubre',
				'Noviembre',
				'Diciembre',
			]
			const month = store.date.getMonth() // Los meses comienzan desde 0

			return MONTHS[month]
		},
	}))
	.actions((store) => ({
		setDate(date: Date) {
			store.date = date
		},
	}))

export const getMonthName = (monthNumber: number): string | undefined => {
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

	if (monthNumber >= 0 && monthNumber < MONTHS.length) {
		return MONTHS[monthNumber]
	} else {
		console.error('Número de mes no válido:', monthNumber)
		return undefined
	}
}

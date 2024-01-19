export const timeZoneSetter = (date: Date) => {
	const timeInMlSeconds = date.getTime()
	const substractingMlSeconds = 3 * 60 * 60000
	return new Date(timeInMlSeconds - substractingMlSeconds)
}

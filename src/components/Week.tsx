import { addDays, startOfWeek, format, isSameDay, isFuture } from 'date-fns'
import es from 'date-fns/locale/es'
import { DateBox } from 'commons'
import { useStore } from 'models/root.store'
import { observer } from 'mobx-react-lite'
export const getDayAndDate = (date: Date) => {
	const dayOfWeek = format(date, 'eee', { locale: es }) // 'lun', 'mar', 'mie', etc.
	const dayOfMonth = format(date, 'd') // número del día

	return { dayOfWeek, dayOfMonth }
}
export const Week = observer(function ({ currentWeek }: { currentWeek: Date }) {
	const {
		date: { date, setDate },
	} = useStore()
	const days = []
	for (let i = 1; i < 6; i++) {
		const newDate = addDays(startOfWeek(currentWeek), i)
		const isToday = isSameDay(newDate, date)
		const { dayOfMonth, dayOfWeek } = getDayAndDate(newDate)

		const handleDate = (date: Date) => {
			!isFuture(date) && setDate(date)
		}
		days.push(
			<DateBox
				onClick={() => handleDate(newDate)}
				variant={isToday ? 'selected' : 'notSelected'}
				disabled={isFuture(newDate)}
				day={dayOfWeek}
				date={dayOfMonth}
			/>
		)
	}
	return days
})

'use client'
import { Button, TitleBox, SwornStatementBox } from 'commons'
import { useStore } from 'models/root.store'
import React, { useState } from 'react'
import { message } from 'antd'
import { UserServices } from 'services'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { timeZoneSetter } from 'utils'

export default observer(function SwornStatementPage() {
	const {
		users: { loggedUser, setUserLogged },
	} = useStore()
	const [alcoholSelected, setAlcoholSelected] = useState<string | null>(null)
	const [medicationSelected, setMedicationSelected] = useState<string | null>(
		null
	)
	const [issueSelected, setIssueSelected] = useState<string | null>(null)

	const router = useRouter()

	const handleChangeAnswers = () => {
		setAlcoholSelected(null)
		setMedicationSelected(null)
		setIssueSelected(null)
	}

	const handleSwornStatement = () => {
		const timeOfDeclaration = timeZoneSetter(new Date())
		if (
			alcoholSelected === 'No' &&
			medicationSelected === 'No' &&
			issueSelected === 'No'
		) {
			const selectedPackages = localStorage
				.getItem('SELECTED_PACKAGES')
				?.split(',')
			const arrayofPromises = selectedPackages?.map((packId) => {
				if (loggedUser) {
					return UserServices.addPackage(loggedUser._id, packId)
				}
			})

			if (arrayofPromises) {
				Promise.all(arrayofPromises)
					.then(() => {
						message.success('Paquetes asignados correctamente')
						loggedUser &&
							UserServices.getUserById(loggedUser?._id).then((res) => {
								setUserLogged(res.data)
							})
						router.push('/carrier')
					})
					.catch(() => {
						message.error('Error al asignar paquetes!')
					})
			}
		} else {
			if (loggedUser) {
				UserServices.updateUserStatus(loggedUser._id, 'RECHAZADO')
				UserServices.updateUserDeclarationTime(loggedUser._id, timeOfDeclaration)
			}
			localStorage.clear()
			router.push('/login')
			message.error('Quedaste inhabilitado por 24 hs para repartir paquetes')
		}
	}

	return (
		<div className="h-[100%] flex flex-col gap-4 justify-between">
			<TitleBox className="w-full">Declaración Jurada</TitleBox>

			<SwornStatementBox
				question="¿Ha consumido bebidas alcohólicas en las últimas 12 horas?"
				options={['Si', 'No']}
				onSelect={(value) => setAlcoholSelected(value)}
				selectedValue={alcoholSelected}
			/>

			<SwornStatementBox
				question="¿Usted está haciendo uso de algún medicamento psicoactivo?"
				options={['Si', 'No']}
				onSelect={(value) => setMedicationSelected(value)}
				selectedValue={medicationSelected}
			/>

			<SwornStatementBox
				question="¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo distraiga?"
				options={['Si', 'No']}
				onSelect={(value) => setIssueSelected(value)}
				selectedValue={issueSelected}
			/>

			<Button
				className="w-[90%] uppercase flex m-auto justify-center"
				variant="secondary"
				onClick={handleChangeAnswers}
				disabled={!alcoholSelected || !medicationSelected || !issueSelected}>
				Cambiar Respuestas
			</Button>

			<Button
				className="w-[90%] uppercase flex m-auto justify-center"
				onClick={handleSwornStatement}
				disabled={!alcoholSelected || !medicationSelected || !issueSelected}>
				Continuar
			</Button>
		</div>
	)
})

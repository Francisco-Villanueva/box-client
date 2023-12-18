'use client'
import { BoxLayout, BoxTitle, Button, Checkbox, Title, TitleBox } from 'commons'
import React, { useState } from 'react'

export default function SwornStatementPage() {
	const [alcoholSelected, setAlcoholSelected] = useState(false)
	const [medicationSelected, setMedicationSelected] = useState(false)
	const [issueSelected, setIssueSelected] = useState(false)

	const [alcoholConsumed, setAlcoholConsumed] = useState<string>('')
	const [medicationConsumed, setMedicationConsumed] = useState<string>('')
	const [issue, setIssue] = useState<string>('')

	const handleAlcoholYes = () => {
		setAlcoholConsumed('si')
		setTimeout(function () {
			setAlcoholSelected(true)
		}, 500)
	}
	const handleAlcoholNo = () => {
		setAlcoholConsumed('no')
		setTimeout(function () {
			setAlcoholSelected(true)
		}, 500)
	}
	const handleMedicationYes = () => {
		setMedicationConsumed('si')
		setTimeout(function () {
			setMedicationSelected(true)
		}, 500)
	}
	const handleMedicationNo = () => {
		setMedicationConsumed('no')
		setTimeout(function () {
			setMedicationSelected(true)
		}, 500)
	}
	const handleIssueYes = () => {
		setIssue('si')
		setTimeout(function () {
			setIssueSelected(true)
		}, 500)
	}
	const handleIssueNo = () => {
		setIssue('no')
		setTimeout(function () {
			setIssueSelected(true)
		}, 500)
	}
	const handleChangeAnswers = () => {
		setAlcoholSelected(false)
		setMedicationSelected(false)
		setIssueSelected(false)
	}

	const handleSwornStatement = () => {
		console.log('Alcohol', alcoholConsumed)
		console.log('Medicacion', medicationConsumed)
		console.log('Problemas', issue)
	}

	return (
		<div className="h-[100%] flex flex-col gap-4 justify-between">
			<TitleBox className="w-full">Declaración Jurada</TitleBox>
			<BoxLayout className="bg-white h-[30%]">
				<BoxTitle variant="required">
					<Title>Requerido *</Title>
				</BoxTitle>
				<div className="flex flex-col items-center">
					<div className="font-roboto bg-white text-darkGreen w-[85%] p-3 border-b-2 text-center text-lg">
						¿Ha consumido bebidas alcohólicas en las últimas 12 horas?
					</div>
					<div className="flex flex-row gap-20 pt-3 mb-3">
						{!alcoholSelected ? (
							<>
								<div className="flex flex-row gap-2">
									<Checkbox handleCheck={handleAlcoholYes}></Checkbox>
									<div>Si</div>
								</div>
								<div className="flex flex-row gap-2">
									<Checkbox handleCheck={handleAlcoholNo}></Checkbox>
									<div>No</div>
								</div>
							</>
						) : (
							<p>Respuesta: {alcoholConsumed.toLocaleUpperCase()}</p>
						)}
					</div>
				</div>
			</BoxLayout>
			<BoxLayout className="bg-white h-[35%] ">
				<BoxTitle variant="required">
					<Title>Requerido *</Title>
				</BoxTitle>
				<div className="flex flex-col items-center">
					<div className="font-roboto bg-white text-darkGreen w-[85%] p-3 border-b-2 text-center text-lg">
						¿Usted está haciendo uso de algún medicamento psicoactivo?
						<div className="text-sm">
							Por ejemplo: tranquilizantes, antigripales,antialérgicos o para insomnio
						</div>
					</div>
					<div className="flex flex-row gap-20 pt-3 mb-3">
						{!medicationSelected ? (
							<>
								<div className="flex flex-row gap-2">
									<Checkbox handleCheck={handleMedicationYes}></Checkbox>
									<div>Si</div>
								</div>
								<div className="flex flex-row gap-2">
									<Checkbox handleCheck={handleMedicationNo}></Checkbox>
									<div>No</div>
								</div>
							</>
						) : (
							<p>Respuesta: {medicationConsumed.toLocaleUpperCase()}</p>
						)}
					</div>
				</div>
			</BoxLayout>
			<BoxLayout className="bg-white h-[35%] ">
				<BoxTitle variant="required">
					<Title>Requerido *</Title>
				</BoxTitle>
				<div className="flex flex-col items-center">
					<div className="font-roboto bg-white text-darkGreen w-[85%] p-3 border-b-2 text-center text-lg">
						¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo
						distraiga?
					</div>
					<div className="flex flex-row gap-20 pt-3 mb-3">
						{!issueSelected ? (
							<>
								<div className="flex flex-row gap-2">
									<Checkbox handleCheck={handleIssueYes}></Checkbox>
									<div>Si</div>
								</div>
								<div className="flex flex-row gap-2">
									<Checkbox handleCheck={handleIssueNo}></Checkbox>
									<div>No</div>
								</div>
							</>
						) : (
							<p>Respuesta: {issue.toLocaleUpperCase()}</p>
						)}
					</div>
				</div>
			</BoxLayout>
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
}

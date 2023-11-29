'use client'
import { TitleBox } from 'commons'
import React, { useState } from 'react'
import { ArrowLeft } from 'commons/Icons'
import { Button, BoxLayout } from 'commons'
import Link from 'next/link'
import { message } from 'antd'
import { FormInput } from 'components'
import { useRouter } from 'next/navigation'
export default function CreatePackage() {
	const router = useRouter()
	const [packageData, setPackageData] = useState({})

	const handleInput = (key: string, value: string) => {
		const trimmedValue = value.trim()
		setPackageData((prev) => ({
			...prev,
			[key]: trimmedValue,
		}))
		console.log(packageData)
	}

	const handleCreatePackage = () => {
		router.push('/admin')
		console.log('packageData--->', packageData)
		message.success('Paquete creado')
	}

	return (
		<div>
			<TitleBox
				icon={
					<Link href={'/admin'}>
						<ArrowLeft />
					</Link>
				}
				className="mb-3 w-full">
				AGREGAR PAQUETES
			</TitleBox>
			<BoxLayout className="bg-white h-full px-8 pt-8">
				<FormInput
					placeholder="Dirección"
					type="text"
					reference="address"
					handleInput={handleInput}
					validation="address"
					className="my-5"
				/>
				<FormInput
					type="text"
					reference="name"
					handleInput={handleInput}
					placeholder="Nombre de quien recibe"
					validation="name"
					className="my-5"
				/>
				<FormInput
					type="text"
					reference="weight"
					handleInput={handleInput}
					placeholder="Peso del paquete (Kg)"
					validation="weight"
					className="my-5"
				/>
				<div className="pt-12 pb-28">
					{/* <InputCalendar title="Seleccione una fecha" /> */}
					<div className="flex flex-col">
						<span className="text-darkGreen ">Seleccione una fecha</span>
						<FormInput
							type="date"
							reference="date"
							handleInput={handleInput}
							placeholder=""
							className="my-5"
						/>
					</div>
				</div>
			</BoxLayout>
			<div className="flex justify-center">
				<Button
					className="w-11/12 mt-5"
					onClick={handleCreatePackage}
					disabled={Object.values(packageData).some((value) => value === '')}>
					AGREGAR
				</Button>
			</div>
		</div>
	)
}

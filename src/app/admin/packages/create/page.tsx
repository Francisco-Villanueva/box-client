'use client'
import { TitleBox } from 'commons'
import React, { useState } from 'react'
import { ArrowLeft } from 'commons/Icons'
import { Button, BoxLayout } from 'commons'
import Link from 'next/link'
import { message } from 'antd'
import { FormInput } from 'components'
import { useRouter } from 'next/navigation'
import { CreatePackage } from 'types'
import { PackageServices } from 'services'
export default function CreatePackage() {
	const router = useRouter()
	const [packageData, setPackageData] = useState<CreatePackage>({
		address: '',
		clientName: '',
		deliverDate: '',
		status: 'unassigned',
		weight: 0,
	})

	const handleInput = (key: string, value: string) => {
		const trimmedValue = value.trim()
		setPackageData((prev) => ({
			...prev,
			[key]: trimmedValue,
		}))
	}

	const handleCreatePackage = () => {
		PackageServices.createPackage(packageData)
			.then(() => {
				router.push('/admin')
				message.success('Paquete creado')
			})
			.catch(() => {
				message.error('error al crear el paquete')
			})
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
					reference="clientName"
					handleInput={handleInput}
					placeholder="Nombre de quien recibe"
					validation="name"
					className="my-5"
				/>
				<FormInput
					type="number"
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
							reference="deliverDate"
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

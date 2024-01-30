import { Button, IconBox, Status } from 'commons'
import { MapIcon, TrashIcon } from 'commons/Icons'
import { Package } from 'types'
import { message, Modal } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import { useRouter } from 'next/navigation'
import { UserServices, PackageServices } from 'services'
import { useState } from 'react'

interface ShipmentCardProps {
	pack: Package
}

export const ShipmentCard = observer(function ShipmentCard({
	pack,
}: ShipmentCardProps) {
	const splitAddress = pack.address.split(',')

	const {
		packages: { setPackageId, setPackages },
		users: { loggedUser, setUserLogged, selectedCarrier, setUsers },
	} = useStore()

	const router = useRouter()
	const viewMap = () => {
		setPackageId(pack._id)
		localStorage.setItem('CURRENT_PACKAGE_ID', pack._id)
		router.push('/carrier/map')
	}

	const handleDeletePendingPackage = async () => {
		try {
			if (loggedUser?.role === 'CARRIER') {
				await UserServices.removePackage(loggedUser._id, pack._id)
				await PackageServices.udapatePackage(pack._id, {
					...pack,
					status: 'NO ASIGNADO',
				})
				UserServices.getUserById(loggedUser._id).then((res) => {
					setUserLogged(res.data)
					message.success('Paquete desasignado')
				})
			} else if (selectedCarrier) {
				await UserServices.removePackage(selectedCarrier._id, pack._id)
				await PackageServices.udapatePackage(pack._id, {
					...pack,
					status: 'NO ASIGNADO',
				})
				const users = await UserServices.getAllUsers()
				setUsers(users)
				message.success('Paquete desasignado del repartidor')
			} else {
				const packageCarrier = await UserServices.findPackageCarrier(pack._id)
				if (packageCarrier) {
					await UserServices.removePackage(packageCarrier._id, pack._id)
					await PackageServices.udapatePackage(pack._id, {
						...pack,
						status: 'NO ASIGNADO',
					})
				}
				const packages = await PackageServices.getAllPackages()
				setPackages(packages)
				message.success('Paquete desasignado del repartidor')
			}
		} catch (error) {
			console.error('Error al eliminar el paquete:', error)
			throw error
		}
	}

	const handleDeleteDeliveredPackage = async () => {
		try {
			if (loggedUser?.role === 'CARRIER') {
				await PackageServices.udapatePackage(pack._id, {
					...pack,
					isShownToCarrier: false,
				})
				UserServices.getUserById(loggedUser._id).then((res) => {
					setUserLogged(res.data)
					message.success('Paquete eliminado del historial')
				})
			} else {
				await PackageServices.udapatePackage(pack._id, {
					...pack,
					isShownToAdmin: false,
				})
				message.success('Paquete eliminado del historial')
				const users = await UserServices.getAllUsers()
				setUsers(users)
				const packages = await PackageServices.getAllPackages()
				setPackages(packages)
			}
		} catch (error) {
			console.error('Error al eliminar el paquete:', error)
			throw error
		}
	}

	const handleDeleteUnassignedPackage = async () => {
		try {
			await PackageServices.deletePackage(pack._id)
			hideModal()
			message.success('Paquete eliminado')
			const packages = await PackageServices.getAllPackages()
			setPackages(packages)
		} catch (error) {
			console.error('Error al eliminar el paquete:', error)
			throw error
		}
	}

	const handleStartDelivery = async () => {
		try {
			if (loggedUser) {
				PackageServices.udapatePackage(pack._id, {
					...pack,
					status: 'EN CURSO',
				}).then(() => {
					UserServices.getUserById(loggedUser._id).then((res) => {
						setUserLogged(res.data)
						message.success('Entrega inicializada')
					})
				})
			}
		} catch (error) {
			console.error('Error al iniciar paquete:', error)
			throw error
		}
	}

	const [open, setOpen] = useState(false)

	const showModal = () => {
		setOpen(true)
	}

	const hideModal = () => {
		setOpen(false)
	}

	return (
		<div className="font-roboto bg-white text-darkGreen w-full p-2 flex items-center">
			<div>{<IconBox />}</div>
			<div className="font-roboto text-xs pl-2">
				<div className="font-semibold">#{pack._id.slice(pack._id.length - 5)}</div>
				<div className="font-normal">{splitAddress[0]}</div>
				<div>{splitAddress[1]}</div>
			</div>
			<div className="ml-auto flex flex-col items-end gap-2 justify-between">
				<div>{<Status status={`${pack.status}`}></Status>}</div>

				<div className="flex items-center gap-2 w-full  justify-around">
					{pack.status === 'EN CURSO' && loggedUser?.role === 'CARRIER' ? (
						<Button
							variant="secondary"
							className="rounded-md p-0 w-full flex justify-center "
							onClick={viewMap}>
							<MapIcon className="w-[1rem]" />
						</Button>
					) : pack.status === 'PENDIENTE' && loggedUser?.role === 'CARRIER' ? (
						<Button
							variant="secondary"
							className="rounded-md p-0 w-full flex justify-center "
							onClick={handleStartDelivery}>
							<span className="text-[10px]">INICIAR</span>
						</Button>
					) : null}
					{pack.status === 'EN CURSO' ||
					pack.status === 'PENDIENTE' ||
					pack.status === 'ENTREGADO' ? (
						<Button
							variant="secondary"
							className="rounded-md p-0 w-full flex justify-center"
							onClick={
								pack.status === 'EN CURSO' || pack.status === 'PENDIENTE'
									? handleDeletePendingPackage
									: handleDeleteDeliveredPackage
							}>
							<TrashIcon className="w-[1rem]" />
						</Button>
					) : null}

					{pack.status === 'NO ASIGNADO' ? (
						<Button
							onClick={showModal}
							variant="secondary"
							className="rounded-md p-0 w-full flex justify-center">
							<TrashIcon className="w-[1rem]" />
						</Button>
					) : null}
					<Modal
						title="Eliminar Paquete"
						open={open}
						onCancel={hideModal}
						okButtonProps={{ className: 'bg-darkGreen' }}
						onOk={handleDeleteUnassignedPackage}>
						<p>
							¿Esta seguro que desea eliminar el paquete? Se borrará su registro de la
							base de datos.
						</p>
					</Modal>
				</div>
			</div>
		</div>
	)
})

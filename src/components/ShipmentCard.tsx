import { Button, IconBox, Status } from 'commons'
import { MapIcon, TrashIcon } from 'commons/Icons'
import { Package } from 'types'
import { message } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import { useRouter } from 'next/navigation'
import { UserServices, PackageServices } from 'services'

interface ShipmentCardProps {
	pack: Package
}

export const ShipmentCard = observer(function ShipmentCard({
	pack,
}: ShipmentCardProps) {
	const splitAddress = pack.address.split(',')

	const {
		packages: { setPackageId },
		users: { loggedUser },
	} = useStore()

	const router = useRouter()
	const viewMap = () => {
		setPackageId(pack._id)
		localStorage.setItem('CURRENT_PACKAGE_ID', pack._id)
		router.push('/carrier/map')
	}

	const handleDeletePackage = async () => {
		try {
			if (loggedUser) {
				await UserServices.removePackage(loggedUser._id, pack._id)
				await PackageServices.udapatePackage(pack._id, {
					...pack,
					status: 'NO ASIGNADO',
				})
				router.refresh()
				message.success('Paquete eliminado!')
			}
		} catch (error) {
			console.error('Error al eliminar el paquete:', error)
			throw error
		}
	}

	const handleStartDelivery = () => {
		PackageServices.udapatePackage(pack._id, {
			...pack,
			status: 'EN CURSO',
		}).then(() => {
			message.success('Entrega inicializada')
			// TODO temporal, revisar el refresh del status:
			router.refresh()
		})
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
					) : null}

					{pack.status === 'EN CURSO' && loggedUser?.role === 'CARRIER' ? (
						<Button
							variant="secondary"
							className="rounded-md p-0 w-full flex justify-center "
							onClick={handleDeletePackage}>
							<TrashIcon className="w-[1rem]" />
						</Button>
					) : pack.status === 'PENDIENTE' && loggedUser?.role === 'CARRIER' ? (
						<Button
							variant="secondary"
							className="rounded-md p-0 w-full flex justify-center "
							onClick={handleStartDelivery}>
							<span className="text-[10px]">INICIAR</span>
						</Button>
					) : null}
				</div>
			</div>
		</div>
	)
})

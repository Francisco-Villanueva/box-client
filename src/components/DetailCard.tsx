import { Button, Graph, Title } from 'commons'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import Link from 'next/link'

interface DetailCardProps {
	type: 'carrier' | 'package'
}

export const DetailCard = observer(function DetailCard({
	type,
}: DetailCardProps) {
	const {
		users: { avaliableCarriers, carriers },
		packages: { packages, deliveredPackages, packagesByDate },
		date: { date_YMD },
	} = useStore()

	const title = type === 'carrier' ? 'Repartidores' : 'Paquetes'

	const DELIVERD_PACKAGES = packagesByDate(deliveredPackages, date_YMD)
	const TOTAL_PACKAGES = packagesByDate(packages, date_YMD)
	const percentage =
		type === 'carrier'
			? Math.floor((avaliableCarriers.length / carriers.length) * 100)
			: Math.floor((DELIVERD_PACKAGES.length / TOTAL_PACKAGES.length) * 100)

	const navLink = type === 'carrier' ? 'carriers' : 'packages'
	return (
		<div className="flex justify-between items-center text-darkGreen ">
			<div className="flex items-center gap-4">
				<Graph value={isNaN(percentage) ? 0 : percentage} size="lg" />
				<div className="flex flex-col">
					<Title>{title}</Title>
					<div>
						{type === 'carrier' ? (
							<>
								{avaliableCarriers.length}/{carriers.length} Habilitados
							</>
						) : (
							<>
								{DELIVERD_PACKAGES.length}/{TOTAL_PACKAGES.length} Entregados
							</>
						)}
					</div>
					{type === 'carrier' && (
						// TODO fixear esto y hacerlo con imagenes reales
						<div className="flex ml-[1rem]">
							{avaliableCarriers.map((carrier) => (
								<div
									key={carrier._id}
									className="ml-[-1rem] border rounded-full bg-green-700  w-[2rem] h-[2rem]"></div>
							))}
						</div>
					)}
				</div>
			</div>

			<Link href={`/admin/${navLink}`}>
				<Button>VER</Button>
			</Link>
		</div>
	)
})

import { Checkbox } from 'commons'
import { Package } from 'types'

interface PackageCheckboxCardProps {
	pack: Package
	handleAddPackages: (param: string) => void
}

export function PackageCheckboxCard({
	pack,
	handleAddPackages,
}: PackageCheckboxCardProps) {
	const splitAddress = pack.address.split(',')
	const shortAddress = `${splitAddress[0]}, ${splitAddress[1]}`

	const setPackId = () => {
		handleAddPackages(pack._id)
	}
	return (
		<div className="font-roboto bg-white text-darkGreen w-full p-3 flex items-center border">
			<Checkbox handleCheck={setPackId} />
			<div className="font-roboto text-xs pl-2">
				<div>{shortAddress}</div>
			</div>
		</div>
	)
}

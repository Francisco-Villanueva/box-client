import { Package } from 'types/packages.types'
import { packages } from '../mocks/items.json'
export class PackageServices {
	static getAllPackages(): Promise<Package[]> {
		return Promise.resolve(packages as Package[])
	}
}

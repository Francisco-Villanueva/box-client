import { Package } from 'types/packages.types'
import axios, { AxiosResponse } from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
export class PackageServices {
	static async getAllPackages(): Promise<Package[]> {
		const response: AxiosResponse = await axios.get(`${BASE_URL}/packages`)
		//info repetida, check this
		console.log(response.data)
		return response.data
	}
}

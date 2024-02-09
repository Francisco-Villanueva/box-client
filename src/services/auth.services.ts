import { ICredentials, IEmailData, IRegisterData, IUpdateData } from 'types'
import axiosInstance from './axiosConfig'

export class AuthServices {
	static async login(data: ICredentials) {
		const user = await axiosInstance.post('/auth/login', data)
		return user.data
	}

	static async register(data: IRegisterData) {
		const user = await axiosInstance.post('/auth/register', data)
		return user.data
	}

	static async resetPassword(data: IEmailData) {
		const email = await axiosInstance.post('/auth/reset-password', data)
		return email.data
	}

	static async updatePassword(data: IUpdateData) {
		const updateData = await axiosInstance.patch('/auth/update-password', data)

		return updateData.data
	}
	static async me(token: string) {
		const payload = await axiosInstance.post('/auth/me', { token })
		return payload
	}
	//Servicio que envía la imagen al back, para que de ahí se suba a aws
	static async uploadImage(file: File): Promise<string> {
		const formData = new FormData()
		formData.append('image', file)

		const response = await axiosInstance.post('/auth/upload-image', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		return response.data.imageUrl
	}
}

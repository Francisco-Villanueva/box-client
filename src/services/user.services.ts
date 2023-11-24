import { User } from 'types/user.types'
import { user } from '../mocks/users.json'

export class UserServices {
	static getAllUsers(): Promise<User[]> {
		return Promise.resolve(user as User[])
	}
}

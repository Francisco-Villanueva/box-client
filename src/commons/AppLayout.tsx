import React, { ReactNode } from 'react'
import BoxLogo from '../../public/boxLogo-2.png'
import Image from 'next/image'
import { Button, BodyLayout } from 'commons'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import { useRouter } from 'next/navigation'
import { message } from 'antd'

interface AppLayoutProps {
	children: ReactNode
	className?: string
}

export const AppLayout = observer(function ({
	children,
	className,
}: AppLayoutProps) {
	const {
		users: { loggedUser },
	} = useStore()
	const router = useRouter()
	const handleLogOut = () => {
		localStorage.clear()
		message.success('Has cerrado sesión')
		router.push('/login')
	}

	const userRole = loggedUser ? loggedUser.role.toLocaleLowerCase() : 'login'

	const handleBoxClick = () => {
		router.push(`/${userRole}`)
	}

	return (
		<div
			className={` flex flex-col gap-4 bg-lightGreen w-full min-h-screen overflow-auto p-3 ${className}`}>
			<div className="flex justify-between items-center">
				<div>
					<Button
						variant="secondary"
						className="border-none"
						onClick={handleBoxClick}>
						<Image src={BoxLogo} alt="boxLogo" width={100} />
					</Button>
				</div>
				{loggedUser && (
					<div>
						<Button
							onClick={handleLogOut}
							variant="secondary"
							className="w-30 h-8 text-xs">
							CERRAR SESION
						</Button>
					</div>
				)}
			</div>
			<BodyLayout>{children}</BodyLayout>
		</div>
	)
})

'use client'
import { Login } from 'components'
import React from 'react'

export default function LoginPage() {
	return (
		<div className="pt-[27vh] xl:pt-[10%] bg-darkGreen bg-cover bg-center bg-no-repeat bg-[url(../../public/backgroundBox.svg)] h-screen w-full px-10  ">
			<Login />
		</div>
	)
}

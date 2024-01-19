'use client'
import { useState } from 'react'

export default function useModal() {
	const [isModalOpen, setIsModalOpen] = useState(true)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}
	return {
		isModalOpen,
		toggleModal,
	}
}

'use client'
import { DeliveryInProgress } from 'components/DeliveryInProgress'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'

export default observer(function MapPage() {
	const {
		packages: { currentPackage, setPackageId },
	} = useStore()

	//TODO Mejorar la carga y el renderizado de los componentes
	if (typeof window !== 'undefined') {
		const currentPackageId = localStorage.getItem('CURRENT_PACKAGE_ID')

		if (!currentPackage && currentPackageId) {
			setPackageId(currentPackageId)
		}
	}

	const address = currentPackage?.address
	const receiver = currentPackage?.clientName
	const packNumber = currentPackage?._id.slice(0, 5)

	return (
		<DeliveryInProgress
			address={address}
			receiver={receiver}
			packNumber={packNumber}></DeliveryInProgress>
	)
})

import React, { useEffect, useState } from 'react'

interface GoogleMapProps {
	destination: string
}

export const GoogleMap = ({ destination }: GoogleMapProps) => {
	const [origin, setOrigin] = useState<string | null>(null)

	useEffect(() => {
		const getGeolocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords
						setOrigin(`${latitude},${longitude}`)
					},
					(error) => {
						console.error('Error getting geolocation:', error)
					}
				)
			} else {
				console.error('Geolocation is not supported by this browser.')
			}
		}
		getGeolocation()
	}, [])

	const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDHpvaGqc_rZRtn4gmFBBnRqr3D4vumqE0&origin=${
		origin || 'current+location'
	}&destination=${encodeURIComponent(destination)}&mode=driving`

	return (
		<iframe
			title="Google Maps Directions"
			id="gmap_canvas"
			src={mapSrc}
			className="h-full w-full"></iframe>
	)
}

import React, { useEffect, useState } from 'react'

interface GoogleMapProps {
	destination: string
}

export const GoogleMap = ({ destination }: GoogleMapProps) => {
	const [origin, setOrigin] = useState<string | null>(null)
	const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

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

	const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_API_KEY}&origin=${
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

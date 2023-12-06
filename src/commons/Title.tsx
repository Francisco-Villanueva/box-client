interface Props {
	children?: string | string[]
}

export function Title({ children }: Props) {
	let content = children

	if (Array.isArray(children)) {
		content = children.join('')
	}

	return (
		<p className="font-medium text-center text-darkGreen text-md">
			{content ? content : ''}
		</p>
	)
}

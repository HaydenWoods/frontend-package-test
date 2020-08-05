import React from 'react'

import './styles.scss'

type ButtonProps = {
	text: string,
}

export const Button = ({ text }: ButtonProps) => {
	return (
		<div className="button">
			<p>{ text }</p>
		</div>
	)
}
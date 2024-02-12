"use client"

import { StyleDeclaration, StyleSheet, css } from 'aphrodite'
import React, { useState, useEffect, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

export interface MarkdownAphroditeProps {
	container: StyleDeclaration
}
interface MarkdownReaderProps {
	markdownUrl: string
	styles?: MarkdownAphroditeProps
}

const MarkdownReader: FC<MarkdownReaderProps> = ({ markdownUrl, styles }) => {

	const [markdownContent, setMarkdownContent] = useState('')
	
	const aphrodite = StyleSheet.create({...styles})

	useEffect(() => {
		const fetchMarkdown = async () => {
			try {
				const response = await fetch(markdownUrl)
				if (!response.ok) {
					throw new Error('Failed to fetch markdown')
				}
				const markdownText = await response.text()
				setMarkdownContent(markdownText)
			} catch (error) {
				console.error('Error fetching markdown:', error)
			}
		}
		fetchMarkdown()
	}, [markdownUrl])

	return (
		<div className={css(aphrodite.container)} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
		</div>
	)
}

export default MarkdownReader

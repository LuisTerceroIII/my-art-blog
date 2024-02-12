"use client"
import React, { useState, useEffect, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

interface MarkdownReaderProps {
	markdownUrl: string
	classes?: string
}

const MarkdownReader: FC<MarkdownReaderProps> = ({ markdownUrl, classes }) => {

	const [markdownContent, setMarkdownContent] = useState('')

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
		<div className={`${classes}`} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
		</div>
	)
}

export default MarkdownReader

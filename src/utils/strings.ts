export const capitalize = (text: string) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`

export const removeMarkdown = (markdown: string) =>
    markdown
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\[.*?\]\(.*?\)/g, '')
        .replace(/(\*\*|__)(.*?)\1/g, '$2')
        .replace(/(\*|_)(.*?)\1/g, '$2')
        .replace(/~~(.*?)~~/g, '$1')
        .replace(/`([^`]*)`/g, '$1')
        .replace(/```[\s\S]*?```/g, '')
        .replace(/^>\s+/gm, '')
        .replace(/#+\s+/g, '')
        .replace(/^\s*\n/gm, '')
        .replace(/^\s+|\s+$/g, '')
        .replace(/^\*+\s+/gm, '')
        .replace(/^\d+\.\s+/gm, '')

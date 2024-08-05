export const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => resolve(reader.result)

        reader.onerror = (error) => {
            console.error(error)
            reject()
        }
    })

export const getFileExtension = ({ name, type }: File) =>
    name.substring(name.lastIndexOf('.') + 1).toLowerCase() || type.split('/')[1] || ''

export const forceDownload = (
    filename: string,
    contents: string,
    type: string
) => {
    const blob = new Blob([contents], { type })
    if ((window.navigator as any).msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename)
    } else {
        const elem = window.document.createElement('a')
        elem.href = window.URL.createObjectURL(blob)
        elem.download = filename
        document.body.appendChild(elem)
        elem.click()
        document.body.removeChild(elem)
    }
}

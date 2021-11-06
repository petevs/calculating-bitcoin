export const cameltoSentenceCase = (x) => {
    const result = x.replace(/([A-Z])/g, " $1")
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)

    return finalResult
}
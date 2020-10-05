export const required = (data) => {
    return data ? undefined : 'Field is required';
}
export const maxLength = (length) => {
    return ((data) => {
        return (data.length > length ? `Max length is ${length} symbols` : undefined)
    })
}
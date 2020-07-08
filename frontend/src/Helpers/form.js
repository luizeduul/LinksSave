export const getFormData = (event) => {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    return data;
}
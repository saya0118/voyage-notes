export const LIST_ADDED = "LIST_ADDED";

export const Add = (country) => {
    return {
        type: "LIST_ADDED",
        payload: country,
    }
}
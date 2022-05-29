export const LIST_ADDED = "LIST_ADDED";
export const LIST_EDITED = "LIST_EDITED";

export const Add = (country) => {
    return {
        type: "LIST_ADDED",
        payload: country,
    }
}

export const Edit = (country) => {
    return {
        type: "LIST_EDITED",
        payload: country,
    }
}
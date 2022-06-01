import { listClasses } from "@mui/material";

export const LIST_ADDED = "LIST_ADDED";
export const LIST_EDITED = "LIST_EDITED";

export const Add = (country) => {
    return {
        type: "LIST_ADDED",
        payload: country,
    }
}

export const Edit = (list) => {
    return {
        type: "LIST_EDITED",
        payload: list,
    }
}

export const Delete = (list) => {
    return {
        type: "LIST_DELETED",
        payload: list,
    }
}
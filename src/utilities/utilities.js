export function sanitizeData(data) {
    return data?.trim();
}

export function isEmpty(data) {
    return sanitizeData(data) === "";
}

export function sortTaskData(a, b){
    if (b.priority - a.priority && b.isFavourite && (!a.priority || !a.isFavourite)) {
        return 1;
    } else if (!b.priority && !b.isFavourite && a.isFavourite && a.priority) {
        return 0;
    } else {
        return b.isFavourite - a.isFavourite;
    }
}
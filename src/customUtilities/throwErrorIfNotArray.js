function throwErrorIfNotArray(errorMessage) {
    return function innerThrowError(possibleArray) {
        if (!Array.isArray(possibleArray)) {
            throw new Error(errorMessage);
        }
    }
}

export default throwErrorIfNotArray;
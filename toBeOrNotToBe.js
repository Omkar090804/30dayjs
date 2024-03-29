function expect(val) {
    function toBe(value) {
        if (val !== value) {
            throw new Error("Not Equal");
        } else {
            return true;
        }
    }

    function notToBe(value) {
        if (val === value) {
            throw new Error("Equal");
        } else {
            return true;
        }
    }

    return {
        toBe: toBe,
        notToBe: notToBe
    };
}

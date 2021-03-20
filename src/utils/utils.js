const validZipCode = (str) => {
    if(str.length !== 5) {
        return false;
    }
    
    if(/\D+/g.test(str)) {
        return false;
    }

    return true;
}

export {
    validZipCode,
};

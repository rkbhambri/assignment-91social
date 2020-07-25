
export const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const isEqual = (item1, item2) => {
    if (typeof (item1) === 'number' && typeof (item2) === 'number') {
        return item1 === item2;
    }
    if (typeof (item1) === 'string' && typeof (item2) === 'string') {
        return item1.toLowerCase() === item2.toLowerCase();
    }
};

export const debounce = (func, wait, immediate) => {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

export const convertDateFormat = (date) => {
    date = new Date(date);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${date.getFullYear()}-${month}-${day}`;
};

export const isNull = (value) => {
    return value === null;
};

export const validateValues = (value) => {
    var regex = /^[a-zA-Z0-9!@#$%^&*)(. _-]{0,16}$/;
    return regex.test(value);
};

export const getItem = (key) => {
    return localStorage.getItem(key);
};
export const setItem = (key, value) => {
    return localStorage.setItem(key, value);
};

export const validateEmail = (email) => {
    let isEmailValid = false;
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email.trim() !== '' && regex.test(email)) {
        isEmailValid = true;
    }
    return isEmailValid;
};

export const validatePassword = (password) => {
    let isPasswordValid = false;
    let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\S]+)$/;
    if (password.trim() !== '' && regex.test(password)) {
        isPasswordValid = true;
    }
    return isPasswordValid;
};


export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const isEmpty = (item) => {
    if (typeof item === 'number') {
        return false;
    }
    return item.trim() === '';
};

export const isArrayNotEmpty = (arr) => {
    return arr.length > 0;
};

export const isArrayEmpty = (arr) => {
    return arr.length === 0;
};

export const indexOf = (arr, value) => {
    return arr.indexOf(value);
};

export const isBoolean = (value) => {
    return typeof value === "boolean";
};

export const isNumber = (value) => {
    return typeof value === "number";
};

export const isString = (value) => {
    return typeof value === "string";
};

export const deleteItem = (array, id) => {
    const updatedData = array.filter(item => item !== id);
    return updatedData;
};

export const isIncludes = (array, value) => {
    return array.includes(value);
};

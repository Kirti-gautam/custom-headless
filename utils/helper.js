export const kpGetCookieValue = (key) => {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.split('=');
        if (cookieKey === key) {
        return cookieValue;
        }
    }
    return null;
};

export const kpGetLocalStorageValue = (key) => {
    return localStorage.getItem(key);
};

export const getValueFromCookiesOrLocalStorage = (key) => {
    const cookieValue = kpGetCookieValue(key);
    if (cookieValue == null) {
        const localStorageValue = kpGetLocalStorageValue(key);
        return localStorageValue;
    }

    return cookieValue;
};
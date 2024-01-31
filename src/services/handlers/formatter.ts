export const formatDate = (timestamp) => {
    const month = timestamp.getMonth() + 1;
    const year = timestamp.getFullYear();
    const date = timestamp.getDate();
    const hour = timestamp.getHours();
    const minute = timestamp.getMinutes();
    const second = timestamp.getSeconds();
    return (
        year +
        "-" +
        addZero(month) +
        "-" +
        addZero(date) +
        " " +
        addZero(hour) +
        ":" +
        addZero(minute) +
        ":" +
        addZero(second)
    );
};

function addZero(digit) {
    return digit >= 10 ? digit : `0${digit}`;
}

export const countDecimals = (val) => {
    // Convert to String
    const numStr = String(val);
    // String Contains Decimal
    if (numStr.includes(".")) {
        return numStr.split(".")[1].length;
    }
    // String Does Not Contain Decimal
    return 0;
};

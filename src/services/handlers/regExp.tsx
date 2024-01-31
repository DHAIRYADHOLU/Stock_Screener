// Replace file name ends with specified string
export const formatImgName = (str) => str.replace(/\.(png|jpg|jpeg|gif)$/, "");

// Indicate If an input string is valid
export const isValidInput = (str: string) => {
    return str && str.replace(/\s/g, "").length !== 0;
};

/**
 * 各种正则表达式
 * mobile   手机号
 * email    电子邮箱
 * password 密码【6-20位】
 */

// 手机号 for mainland China
// export const mobile = /^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/
// for North American
export const mobile =
	/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
// export const mobile = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
// export const mobile = /^([2-9]\d{2})([2-9]\d{2})(\d{4})$/

// 电子邮箱
export const email =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// postal code
export const postalcode = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

// 密码至少8位,至少一个大小字母, 数字
export const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,}$/;

//去除空格
export const getValueFromEvent = (e) => {
	return e.target.value.replace(/(^s*)|(s*$)/g, "");
};

export const digitOnly = /^[0-9]*$/;

export const positiveInteger = /^[1-9]\d*$/;

export const positiveNumber = /^(?=.*[1-9])[0-9]*[.,]?[0-9]{1,2}$/;

export const positiveNumberWithMax99 = /^[1-9][0-9]?(\.[0-9]{1,2})?$/;

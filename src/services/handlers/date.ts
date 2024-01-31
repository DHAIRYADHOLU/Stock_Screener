import dayjs from "dayjs";
import { WEEKDAYS } from "src/common/constants";

export default function handleTimeDiff(timedifferent) {
	const seconds = Math.floor(timedifferent / 1000);

	let interval = seconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + " years ago";
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + " months ago";
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + " days ago";
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + " hours ago";
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + " minutes ago";
	}
	return Math.floor(seconds) + " seconds ago";
}

export function handleDateStrings(dateStrings: string[]) {
	return dateStrings.map((dateString, index) =>
		dateString
			? index === 0
				? `${dateString}T00:00:00.000Z`
				: `${dateString}T23:59:59.000Z`
			: ""
	);
}

export function handleDates(dates: any[]) {
	return dates.map((date) => {
		if (!date) return null;
		const result = dayjs(date);
		// console.log({ date, result });
		return result.isValid() ? result : null;
	});
}

export function dateStringToISO(dateString: string): string {
	const [date1, date2] = dateString.split(" ");
	return `${date1}T${date2}Z`;
}

export function getCurrentDate() {
	const today = new Date();
	const weekday = WEEKDAYS[today.getDay()];
	const day = String(today.getDate()).padStart(2, "0");
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const year = today.getFullYear();
	return { weekday, day, month, year };
}

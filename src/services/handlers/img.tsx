// file转base64
export const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};

// file url转base64
export const getURLBase64 = (url) => {
	return new Promise<string>((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("get", url, true);
		xhr.responseType = "blob";
		xhr.onload = function () {
			if (this.status === 200) {
				const blob = this.response;
				const fileReader = new FileReader();
				fileReader.onloadend = function (e) {
					const result = e.target.result;
					resolve(result as string);
				};
				fileReader.readAsDataURL(blob);
			}
		};
		xhr.onerror = function () {
			reject();
		};
		xhr.send();
	});
};

// base64转文件
export const base64toFile = (dataUrl, filename = "file") => {
	const arr = dataUrl.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const suffix = mime.split("/")[1];
	const bstr = window.atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], `${filename}.${suffix}`, { type: mime });
};

export const checkImgInfo = (file, ratio) =>
	new Promise<boolean>((resolve) => {
		// Read the contents of Image File.
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			const image = new Image();
			image.src = e.target.result as string;
			// Must have this listener
			image.addEventListener("load", () => {
				// check aspect ratio
				const { width, height } = image;
				return (width / height).toFixed(2) === ratio.toFixed(2)
					? resolve(true)
					: resolve(false);
			});
		};
	});

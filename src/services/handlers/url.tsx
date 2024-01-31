export const openInNewTab = (url, isSmall = false) => {
	const newWindow = !isSmall
		? window.open(url, "_blank", "noopener,noreferrer")
		: window.open(url, "_blank", "noopener,noreferrer, height=100,width=200,");
	if (newWindow) newWindow.opener = null;
};

export const downloadQRCode = (elementId: string) => {
	const canvas = document
		.getElementById(elementId)
		?.querySelector<HTMLCanvasElement>("canvas");
	console.log({ canvas });
	if (canvas) {
		const url = canvas.toDataURL();
		const a = document.createElement("a");
		a.download = "QRCode.png";
		a.href = url;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
};

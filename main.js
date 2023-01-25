// code MauraWillems
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {console.log("loading")
	navigator.serviceWorker.register('.\sw.js')
	.then(registratie => {console.log(`Registratie gelukt`)});
});
};

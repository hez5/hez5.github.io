self.addEventListener('message', function(msg){
	let reeks = new Int32Array(msg.data);

// 		while (Atomics.load(reeks,0)==42){
// 		// Doe niets, wacht tot data is gewijzigd
// 	}
	Atomics.wait(reeks, 0, 15000);

	self.postMessage(`Data gewijzigd naar: ` + Atomics.load(reeks,0));
// 	setTimeout(function(){
// 				self.postMessage(`Data gewijzigd naar: ` + Atomics.load(reeks,0));
// 			}, 5000);
});

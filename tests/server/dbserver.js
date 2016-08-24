var FirebaseServer = require('firebase-server');

let db = {
	public:{
		onboarders:{
}
}
}

new FirebaseServer(5000, 'localhost.firebaseio.test', {
    states: {
        CA: 'California',
        AL: 'Alabama',
        KY: 'Kentucky'
    }
});

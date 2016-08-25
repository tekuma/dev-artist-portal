var FirebaseServer = require('firebase-server');

const db = {
	public : {
		onboarders: {
			abc123:{
				name: "stephen"
			}
		}
	},
	_private : {
		email: "stephen@email.com"
	}
};

new FirebaseServer(8000, '127.0.0.1', {
	db
});

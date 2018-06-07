const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.pushNotification = functions.https.onRequest((req, res) => {
	const userId = req.body.userId;
	const title = req.body.title;
	const message = req.body.message;

	if (userId) {
		const getDeviceTokensPromise = admin.database()
			.ref(`/users/${userId}/tokens`).once('value');
		let tokensSnapshot;
		let tokens;

		return Promise.all([getDeviceTokensPromise]).then(results => {
			tokensSnapshot = results[0];

			if (!tokensSnapshot.hasChildren()) {
				return console.log('There are no notification tokens to send to.');
			}

			const payload = {
				notification: {
					title: title,
					body: message
				}
			};
			tokens = tokensSnapshot.val();
			admin.messaging().sendToDevice(tokens, payload);
			return true;
		}).then((reason) => {
			return res.status(200).json({return: false});
		});
	} else {
		return res.status(200).json({return: false});
	}
});
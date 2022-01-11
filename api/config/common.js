exports.encode64 = function encode64(reqText){
	const buff = Buffer.from(reqText, 'utf-8');
	// decode buffer as Base64
	const base64 = buff.toString('base64');
	// print Base64 string
	return base64;
}

exports.decode64 =function decode64(reqText){
	const buff = Buffer.from(reqText, 'base64');
	// decode buffer as UTF-8
	const str = buff.toString('utf-8');
	// print normal string
	return str;
}

exports.appUrl =function appUrl(){
	const appUrl = 'https://alaam.net:4200/';
	return appUrl;
}

exports.removeSpecialChar = function removeSpecialChar(reqText){
	const str = reqText.replace(/[^A-Za-z0-9]/g, "");
	return str;
}

exports.fcmServerKey = function fcmServerKey(){
	const serverKey = 'AAAAdiymPTE:APA91bFZX90W46NOm_ASuWmWlQY_EH0J7XRoMBzYXvrrSBRnwkYAGaPUJWcNV9OpWEvVgfjvWEhBv6vs6mIyjyEizi_gpRdJd3dhDbwQ5LBxKY1YwiYSySyHAdHpRKcMC_2Wcp6uMclw'
	return serverKey;
}
exports.generate = function(prefix, maxLength) {

	if(!prefix){ prefix = '' };

	if(!maxLength){ maxLength = 16; }

    var uniqueString = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < maxLength; i++) {
        uniqueString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return prefix + uniqueString;
}
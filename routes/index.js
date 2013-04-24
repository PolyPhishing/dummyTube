exports.index = function(req, res){
	configObject = new Object();
	configObject.title = 'WatchTube';
	configObject.videoName = 'Micheal Jackson[Live at Woodstalk]';
	console.log(req.params.from)
	configObject.submitLink = '/downloads/VSPlayer_v'+req.params.from;
	res.render('index', configObject);
};
exports.registerPhish = function(req, res){
	console.log(req.params.phished);
	res.render('registerPhish');
};


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
exports.nothing= function(req, res){
	console.log('Appropriate Nothing Route is called.');
	wrapper = new Object();
	wrapper.comments = [{name: 'UAEchemist2 ', message: 'The quake﻿ happened when i was sitting in my college lab talking with the assistant lab technician when all of a sudden the whole building,glassware and the ground was shaking.'}, {name: 'Elbert kwan', message:'My﻿ mom is there'}, {name: 'alaa sohil ', message:'I almost got ran over by a truck, and the most﻿ horrible car accident ever'},{name:'Waheed Ahmed', message:'i m in abudhabi near﻿ mushrif mall'},{name:'Ali Jericho ', message:'Chuck norris was on vacation in Abu dhabi when﻿ he was suddenly told he cant have alcohol without a license here'}];
                
	wrapper.suggestions = [{ videoTitle:'الصور الاولى للزلزال الذي ضرب جنوب إيران', thumbnailSrc:'https://i4.ytimg.com/vi/SaU_a1x1AcA/default.jpg'}, 
		{ videoTitle:'زلزال إيران وهزات بالخليج دبي وابوظبي والفجيرة والسعودية والبحرين والكويت', thumbnailSrc:'https://i1.ytimg.com/vi/PLtRrWkB094/default.jpg'}, 
		{ videoTitle:'هزة أرضية في الخليج خروج السكان من مبانيهم في ابوظبي وعمليات أجلاء', thumbnailSrc:'https://i3.ytimg.com/vi/Jlu4SPyjDfY/default.jpg'}, 
		{ videoTitle:'لحظة وقوع الزلزال', thumbnailSrc:'https://i1.ytimg.com/vi/0WrcBhKLtes/default.jpg'}, 
		{ videoTitle:'إخلاء مبان في الإمارات بعد الزلزال', thumbnailSrc:'https://i1.ytimg.com/vi/xBGru3yI-Zg/default.jpg'}, 
		{ videoTitle:'JAPAN - The Earthquake - 15 Minutes Live-Cam', thumbnailSrc:'https://i3.ytimg.com/vi/jBdvvXyS-r4/default.jpg'}, 
		{ videoTitle:'زلزال بقوة 8 ريختر يضرب إيران وسقوط أكثر من 40 قتيلاً - YouTube', thumbnailSrc:'https://i4.ytimg.com/vi/37Y6Ew3bCnQ/default.jpg'}, 
		{ videoTitle:'زلزال يضرب ايران وارتداده يهز الامارات والخليج 16 / 4 / 2013', thumbnailSrc:'https://i3.ytimg.com/vi/rQ2-uMLZC8U/default.jpg'}, 
		{ videoTitle:'زلزال اليابان | صور مرعبة', thumbnailSrc:'https://i3.ytimg.com/vi/B6_TEbzcgmI/default.jpg'}, 
		{ videoTitle:'Dancing House', thumbnailSrc:'https://i4.ytimg.com/vi/KI2TOP1MtrE/default.jpg'}, 
		{ videoTitle:'دبي.. سكان أبراج يغادرونها بعد الهزة', thumbnailSrc:'https://i4.ytimg.com/vi/CYVK_mKYV0U/default.jpg'}, 
		{ videoTitle:'اعنف زلزال يضرب ايران منذ 40عاما', thumbnailSrc:'https://i2.ytimg.com/vi/5jy0wbyQMq0/default.jpg'}, 
		{ videoTitle:'زلزال يضرب قارة اسيا بالكامل', thumbnailSrc:'https://i4.ytimg.com/vi/wfNbO291NO0/default.jpg'}, 
		{ videoTitle:'31 قتيلا على الأقل ومئات الجرحى في زلزال يضرب جنوب إيران', thumbnailSrc:'https://i2.ytimg.com/vi/EcHP5-pW_4M/default.jpg'}, 
		{ videoTitle:'زلزال بقوة 6.3 قرب بوشهر في ايران يشعر به سكان دولة الإمارات', thumbnailSrc:'https://i2.ytimg.com/vi/ydkf8zOfh2Y/default.jpg'}, 
		{ videoTitle:'IRANS EARTHQUAKES AND NUCLEAR REACTORS LAUNCHING!', thumbnailSrc:'https://i2.ytimg.com/vi/9NWJ-Hz_3zw/default.jpg'}, 
		{ videoTitle:'زلزال يضرب إيران ويهز دول الخليج', thumbnailSrc:'https://i4.ytimg.com/vi/kqmIrPec2WA/default.jpg'}, 
		{ videoTitle:'Iran Earthquake (Magnitude 7,8) Aftermath Footage - April 16, 2013', thumbnailSrc:'https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif'}, 
		{ videoTitle:'الإمارات.. لا خسائر بعد الزلزال', thumbnailSrc:'https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif'}, 
		{ videoTitle:'Mega Earthquake Shakes Iran ', thumbnailSrc:'https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif'}] ;



	res.render('temporary', wrapper);
};


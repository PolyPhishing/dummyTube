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
	res.render('message');
};
exports.nothing= function(req, res){
	console.log(req.params.from);
	wrapper = new Object();
	wrapper.comments = [{name: 'UAEchemist2 ', message: 'The quake﻿ happened when i was sitting in my college lab talking with the assistant lab technician when all of a sudden the whole building,glassware and the ground was shaking.', image:'../images/user/2EQRv_fji672QT.jpg'}
		,{name: 'Elbert kwan', message:'My﻿ mom is there', image:'../images/user/49tghUROIh35t.jpg'}
		,{name:'Waheed Ahmed', message:'i m in abudhabi near﻿ mushrif mall', image:'../images/user/photo.jpg'}
	 	,{name:'Ali Jericho ', message:'Chuck norris was on vacation in Abu dhabi when﻿ he was suddenly told he cant have alcohol without a license here',image:'../images/user/photo.jpg'}
		,{name: 'alaa sohil ', message:'I almost got ran over by a truck, and the most﻿ horrible car accident ever', image:'../images/user/4546gFFGe35g.jpg'}
		];
         
    wrapper.suggestions = [
		{ videoTitle:'الصور الاولى للزلزال الذي ضرب جنوب إيران', thumbnailSrc:'../images/thumbnails/SaU_a1x1AcA.jpg'}, 
		{ videoTitle:'زلزال إيران وهزات بالخليج دبي وابوظبي والفجيرة والسعودية والبحرين والكويت', thumbnailSrc:'../images/thumbnails/0WrcBhKLtes.jpg'}, 
		{ videoTitle:'هزة أرضية في الخليج خروج السكان من مبانيهم في ابوظبي وعمليات أجلاء', thumbnailSrc:'../images/thumbnails/5jy0wbyQMq0.jpg'}, 
		{ videoTitle:'لحظة وقوع الزلزال', thumbnailSrc:'../images/thumbnails/37Y6Ew3bCnQ.jpg'}, 
		{ videoTitle:'إخلاء مبان في الإمارات بعد الزلزال', thumbnailSrc:'../images/thumbnails/B6_TEbzcgmI.jpg'}, 
		{ videoTitle:'JAPAN The Earthquake 15 Minutes Live-Cam', thumbnailSrc:'../images/thumbnails/CYVK_mKYV0U.jpg'}, 
		{ videoTitle:'زلزال بقوة 8 ريختر يضرب إيران وسقوط أكثر من 40 قتيلاً - YouTube', thumbnailSrc:'../images/thumbnails/D34uMLZC8U.jpg'}, 
		{ videoTitle:'زلزال يضرب ايران وارتداده يهز الامارات والخليج 16 / 4 / 2013', thumbnailSrc:'../images/thumbnails/Jlu4SPyjDfY.jpg'}, 
		{ videoTitle:'زلزال اليابان | صور مرعبة', thumbnailSrc:'../images/thumbnails/KI2TOP1MtrE.jpg'}, 
		{ videoTitle:'Dancing House', thumbnailSrc:'../images/thumbnails/jBdvvXyS-r4.jpg'}, 
		{ videoTitle:'دبي.. سكان أبراج يغادرونها بعد الهزة', thumbnailSrc:'../images/thumbnails/kqmIrPec2WAjpg.jpg'}, 
		{ videoTitle:'اعنف زلزال يضرب ايران منذ 40عاما', thumbnailSrc:'../images/thumbnails/PLtRrWkB094.jpg'}, 
		{ videoTitle:'زلزال يضرب قارة اسيا بالكامل', thumbnailSrc:'../images/thumbnails/wfNbO291NO0.jpg'}, 
		{ videoTitle:'31 قتيلا على الأقل ومئات الجرحى في زلزال يضرب جنوب إيران', thumbnailSrc:'../images/thumbnails/CYVK_mKYV0U.jpg'}, 
		{ videoTitle:'زلزال بقوة 6.3 قرب بوشهر في ايران يشعر به سكان دولة الإمارات', thumbnailSrc:'../images/thumbnails/kqmIrPec2WAjpg.jpg'}, 
		{ videoTitle:'IRANS EARTHQUAKES AND NUCLEAR REACTORS LAUNCHING!', thumbnailSrc:'../images/thumbnails/9NWJ-Hz_3zw.jpg'}, 
		{ videoTitle:'زلزال يضرب إيران ويهز دول الخليج', thumbnailSrc:'../images/thumbnails/EcHP5-pW_4M.jpg'}, 
		{ videoTitle:'Iran Earthquake (Magnitude 7,8) Aftermath Footage - April 16, 2013', thumbnailSrc:'../images/thumbnails/0WrcBhKLtes.jpg'}, 
		{ videoTitle:'الإمارات.. لا خسائر بعد الزلزال', thumbnailSrc:'../images/thumbnails/PLtRrWkB094.jpg'}, 
		{ videoTitle:'Mega Earthquake Shakes Iran ', thumbnailSrc:'../images/thumbnails/EcHP5-pW_4M.jpg'}] ;



	res.render('temporary', wrapper);
};


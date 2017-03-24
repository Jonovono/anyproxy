var ifPrint = false;

function setPrintStatus(status){
	ifPrint = !!status;
}

function printLog(content,type){
	if(!ifPrint && type !== T_ERR) return;

	var tip = content;
	console.log(tip);
}

module.exports.printLog       = printLog;
module.exports.setPrintStatus = setPrintStatus;
module.exports.T_TIP          = 0;
module.exports.T_ERR          = 1;
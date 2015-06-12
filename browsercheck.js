var iCheckBrowser=function(){
  this.browserAppName=navigator.appName;
  this.userAgent=navigator.userAgent;
};
iCheckBrowser.prototype.browserName=function(){
  var ua= navigator.userAgent, tem, 
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
	tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
	return 'IE';
  }
  if(M[1]=== 'Chrome'){
	tem= ua.match(/\bOPR\/(\d+)/);
	if(tem!= null) return 'Opera';
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M[0];
};
iCheckBrowser.prototype.browserVersion=function(){
  var ua= navigator.userAgent, tem, 
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
	tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
	return (tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
	tem= ua.match(/\bOPR\/(\d+)/);
	if(tem!= null) return tem[1];
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M[1];
};
iCheckBrowser.prototype.browserData=function(){
  var ua= navigator.userAgent, tem, 
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
	tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
	return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
	tem= ua.match(/\bOPR\/(\d+)/);
	if(tem!= null) return 'Opera '+tem[1];
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
};
iCheckBrowser.prototype.uploadifive=function(){
  var inputFile=document.createElement("input");
  if(typeof inputFile.multiple!="undefined") return true;
  else return false;
};
iCheckBrowser.prototype.anchorDownload=function(){
  var aLink=document.createElement("a");
  if(typeof aLink.download!="undefined") return true;
  else return false;
};
var ias=new iCheckBrowser();

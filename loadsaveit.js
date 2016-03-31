function loadit(callback,errback,url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url||this.url, true);
    xhr.onload = function() {
	if(xhr.status===200){
	    if (callback) callback(xhr.responseText)
	    else      this.setText(xhr.responseText)
	}else if (errback) errback(xhr);
	else console.log("ERROR");
    }.bind(this);
    xhr.send()}
function saveit(callback,errback,url,text){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url||this.url, true);
    xhr.onload = function() {
        if(xhr.status===200) {if(callback)callback()}
	else if(errback) errback(xhr)
	else console.log("ERROR");}
    xhr.send(text||this.getText())}

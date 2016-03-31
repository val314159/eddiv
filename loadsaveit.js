function loadit(url,callback,errback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
	if(xhr.status===200) callback(xhr.responseText)
	else                 {if(errback)errback(xhr)}}
    xhr.send();}
function saveit(url,text,callback,errback){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onload = function() {
        if(xhr.status===200) {if(callback)callback()}
	else                 {if(errback)errback(xhr)}}
    xhr.send(text);}

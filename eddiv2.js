function insert(src,dst,wher){return dst.substr(0,wher)+src+dst.substr(wher)}
var elt=document.getElementById('e');
str=JSON.stringify;
print=console.log.bind(console);
function dump(){ print("XX",(elt.innerHTML)); }
function eddiv(elt,filename){
    if(typeof(elt)==='string') elt=document.getElementById(elt);
    elt.contentEditable=true;
    elt.focus();
    elt.onkeydown=function(e){
	var code = e.keyCode || e.charCode;
	if (code===13){ return insertEnter();}};
    function insertEnter(){
	var selection = window.getSelection();
	var range = selection.getRangeAt(0);
	var offset = range.startOffset;
	elt.innerHTML = insert("\n",elt.innerHTML,offset);
	setTimeout(function(){
	    selection = window.getSelection();
	    range = selection.getRangeAt(0);
	    selection.extend(range.startContainer,offset+1);
	    selection.collapseToEnd();
	},0);
	return false;}
    var self=Object.create(eddiv.prototype);
    self.elt=elt; self.filename=filename; return self;}
eddiv.prototype.dump=function(){ print("XX",(elt.innerHTML)); };


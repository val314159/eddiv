function onkeydown(e){
    var code = e.keyCode || e.charCode;
    if (code===13){
	var selection = window.getSelection();
	var range = selection.getRangeAt(0);
	var offset = range.startOffset;
	this.innerHTML=(this.innerHTML.substr(0,offset)+"\n"+
			this.innerHTML.substr(offset));
	setTimeout(function(){
	    selection = window.getSelection();
	    range = selection.getRangeAt(0);
	    selection.extend(range.startContainer,offset+1);
	    selection.collapseToEnd();
	},0)
	return false}}
function eddiv(elt,url){
    if(typeof(elt)==='string') elt=document.getElementById(elt);
    elt.onkeydown=onkeydown; elt.contentEditable=true; elt.focus();
    return Object.create(eddiv.prototype,{elt:{value:elt},url:{value:url}})}
eddiv.prototype.getText=function( ){ return this.elt.innerHTML }
eddiv.prototype.setText=function(t){ this.elt.innerHTML = t }
eddiv.prototype.dump=function(){ console.log(">>",this.getText()) }
eddiv.prototype.load=Lsit.loadit;
eddiv.prototype.save=Lsit.saveit;

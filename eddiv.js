var Hyper=false, Super=false;
function key2str(e,lbl){
    var keyId=e.keyIdentifier;
    if (keyId < "U+00FF")
	keyId = String.fromCharCode(parseInt(keyId.substr(3),16));
    if     (keyId==='Shift')  return;
    else if(keyId==='Control')return;
    else if(keyId==='Alt') {if(!(e.location===1))Hyper=true;return}
    else if(keyId==='Meta'){if(!(e.location===1))Super=true;return}
    if(e.ctrlKey) keyId="C-"+keyId;
    if(e.metaKey) keyId="M-"+keyId;
    if(e.altKey)  keyId="A-"+keyId;
    if(Hyper)     keyId="H-"+keyId;
    if(Super)     keyId="s-"+keyId;
    Super = Hyper = false;
    console.log([lbl,"KEY 99 STR",keyId,e.location]);
    return keyId;}
function onkeypress(e){}// key2str(e,"PRESS")}
function onkeyup   (e){}// key2str(e,"UP")}
function onkeydown (e){key2str(e,"DOWN");return false;}
		      //var code = e.keyCode || e.charCode;
		      //print(JSON.stringify(e));
    /*if (code===13){
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
	},0)return false}}*/
function eddiv(elt,url){
    if(typeof(elt)==='string') elt=document.getElementById(elt);
    elt.contentEditable=true; elt.focus();
    return Object.create(eddiv.prototype,{elt:{value:elt},url:{value:url}})}
eddiv.prototype.getText=function( ){ return this.elt.innerHTML }
eddiv.prototype.setText=function(t){ this.elt.innerHTML = t }
print=function(){
    document.body.appendChild(document.createTextNode(
	""+JSON.stringify(arguments)));
    document.body.appendChild(document.createElement("br"));
}
eddiv.prototype.dump=function(){ console.log(">>",this.getText());
print(this.getText()); }
eddiv.prototype.load=Lsit.loadit;
eddiv.prototype.save=Lsit.saveit;

var Hyper=false, Super=false;
function key2str(e,lbl){
    var keyId=e.keyIdentifier;
    if (keyId=== undefined)return"";
    if (keyId == "U+001B"){return "ESC"}
    if (keyId == "U+0009"){keyId=(e.shiftKey)?"<backtab>":"<tab>"}
    if (keyId >= "U+0000" && keyId < "U+00FF")
	keyId = String.fromCharCode(parseInt(keyId.substr(3),16)).toLowerCase()
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
function onkeypress(e){}
function onkeyup   (e){}
var prefix = "";
function onkeydown (e){
    var lbl=key2str(e,"DOWN");
    if (lbl==='C-x'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    } else if (lbl==='C-a'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    } else if (lbl==='C-e'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    } else if (lbl==='C-s'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    } else if (lbl==='C-g'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    } else if (lbl==='C-c'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    } else if (lbl==='<tab>'||lbl==='<backtab>'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    } else if (lbl==='ESC'){
	prefix = prefix + " " + lbl;
	console.log("PREFIX:"+prefix);
	return false;
    }
    if(prefix){
	console.log("KEY COMBO UNKNOWN!!! " + prefix + " " + lbl);
    }
    prefix="";
}
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

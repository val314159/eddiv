//if(!global.print)print=console.log;
str=JSON.stringify;
print=console.log.bind(console);
function insertTextAtCursor(text,elt) {
    var sel, range, html;
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
	print("x1");
	range = sel.getRangeAt(0);
	print("x2 r=", range);
	var caret = range.startOffset;
	print("x3 c=", caret);
	range.startOffset = caret;
	range.endOffset = caret;
	print("x4");
	range.setStart(range.startContainer,caret);
	range.setEnd(range.endContainer,caret);
	//range.startOffset = caret+2;
	//range.endOffset = caret+2;
	print("x5");
	
	/*
	range.deleteContents();
	print(str(elt.innerHTML.substr(0,caret)));
	print(str(elt.innerHTML.substr(caret)));
	//range.insertNode( document.createTextNode(text) );
	elt.focus();
	sel = window.getSelection();
	range = sel.getRangeAt(0);
	print("CARET:",caret);
	print("CARET:",elt.innerHTML.length);
	print("CARET:",caret>0);
	range.setStart(elt,caret);
	range.setEnd  (elt,caret);
*/
	print("x9");
	return caret;
    }
}
function eddiv(elt,filename){
    if(typeof(elt)=='string')
	elt=document.getElementById(elt);
    var self=Object.create(eddiv.prototype);
    self.elt=elt;
    self.filename=filename;
    self.text=elt.innerHTML;
    print("TEXT=["+JSON.stringify(self.text)+"]");
    elt.contentEditable=true;
    elt.onkeydown=function(e){
	console.log("ON KEY DOWN", e);
	if(e.keyIdentifier==='Enter'){
	    insertTextAtCursor("\n",elt);
	    return false;
	}
    };
    return self;
}
eddiv.prototype.setText=function(text){ this.innerHTML = this.text = text; };
eddiv.prototype.getText=function(){
    return this.elt.innerHTML;
    return this.text;
};
try{module.exports=eddiv;}catch(e){}
function b1(){ print("getText()=>",str(D.getText())); }
function b2(){
}

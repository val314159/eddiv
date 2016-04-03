Mousetrap.bind("escape x",function(e){
    print("M-x");
    return false;
});
Mousetrap.bind("ctrl+x ctrl+s",function(e){
    print("C-x C-s");
    return false;
});
Mousetrap.bind("command+s",function(e){
    print("Command-s");
    return false;
});
Mousetrap.bind("ctrl+x ctrl+f",function(e){
    print("C-x C-f");
    return false;
});
Mousetrap.bind("ctrl+x o",function(e){
    print("C-x o");
    return false;
});
Mousetrap.bind("ctrl+x 0",function(e){
    print("C-x 0");
    return false;
});
Mousetrap.bind("ctrl+x 2",function(e){
    print("C-x 2");
    return false;
});
Mousetrap.bind("escape :",function(e){
    print("M-:");
    return false;
});
Mousetrap.bind("escape !",function(e){
    print("M-!");
    return false;
});
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
Mousetrap.bind("enter",onkeydown);
function eddiv(elt,url){
    if(typeof(elt)==='string') elt=document.getElementById(elt);
    elt.contentEditable=true; elt.focus();
    return Object.create(eddiv.prototype,{elt:{value:elt},url:{value:url}})}
eddiv.prototype.getText=function( ){ return this.elt.innerHTML }
eddiv.prototype.setText=function(t){ this.elt.innerHTML = t }
print=function(){
    document.body.appendChild(document.createTextNode(""+JSON.stringify(arguments)));
    document.body.appendChild(document.createElement("br"));
}
eddiv.prototype.dump=function(){ console.log(">>",this.getText());
print(this.getText()); }
eddiv.prototype.load=Lsit.loadit;
eddiv.prototype.save=Lsit.saveit;

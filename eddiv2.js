function eddiv(elt,url){
    if(typeof(elt)==='string') elt=document.getElementById(elt);
    elt.contentEditable=true;
    elt.focus();
    elt.onkeydown=function(e){
	var code = e.keyCode || e.charCode;
	if (code===13){
	    var selection = window.getSelection();
	    var range = selection.getRangeAt(0);
	    var offset = range.startOffset;
	    elt.innerHTML=elt.innerHTML.substr(0,offset)+"\n"+elt.innerHTML.substr(offset);
	    setTimeout(function(){
		selection = window.getSelection();
		range = selection.getRangeAt(0);
		selection.extend(range.startContainer,offset+1);
		selection.collapseToEnd();
	    },0)
	    return false}}
    return Object.create(eddiv.prototype,{elt:{value:elt},url:{value:url}})}
eddiv.prototype.getText=function( ){ return this.elt.innerHTML }
eddiv.prototype.setText=function(t){ this.elt.innerHTML = t }
eddiv.prototype.dump=function(){ console.log(">>",this.getText()) }
eddiv.prototype.load=function(){loadit(this.url,this.setText    ,function(x){console.log("ERROR")})}
eddiv.prototype.save=function(){saveit(this.url,this.getText(),0,function(x){console.log("ERROR")})}

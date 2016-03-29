//if(!global.print)print=console.log;
str=JSON.stringify;
print=console.log.bind(console);
function insertEnter(elt){
    selection = window.getSelection();
    range = selection.getRangeAt(0);
    var offset = range.startOffset;
    var html = elt.innerHTML;
    elt.innerHTML = insert("\n",html,offset);
    setTimeout(function(){
	selection = window.getSelection();
	range = selection.getRangeAt(0);
	selection.extend(range.startContainer,offset+1);
	selection.collapseToEnd();
    },0);
    return false;}
function eddiv(){
    var self=Object.create(eddiv.prototype);
    self.init.apply(self,arguments);
    return self;
}
eddiv.prototype.init=function(elt,filename){
    if(typeof(elt)=='string')
	elt=document.getElementById(elt);
    this.elt=elt;
    this.filename=filename;
    this.text=elt.innerHTML;
    elt.contentEditable=true;
    elt.onkeydown=function(e){
	var code = e.keyCode || e.charCode;
	if (code===13) return insertEnter(elt);};
};
eddiv.prototype.setText=function(text){this.innerHTML=this.text=text;};
eddiv.prototype.getText=function(){ return this.elt.innerHTML;}
eddiv.prototype.dump = function(){ print("getText()=>",str(D.getText())); }
eddiv.prototype.save = function(){//save (browser?)
    if(this.filename){
	var txt = ""+D.getText();
	$.ajax(this.filename,{ method:"PUT", data: txt
	}).then(function(){  print("SYEAHHHH!!!!!!!");
	}).then(null,function(){ print("SNOOOOOO!!!!!!!");});
    }}
eddive.prototype.load=function(){//load (browser?)
    if(this.filename){
	$.ajax(this.filename,{ method:"GET"
	}).then(function(d){ print("LYEAHHHH!!!!!!!");  D.setText(d);
	}).then(null,function(){  print("LNOOOOOO!!!!!!!");
	});
    }}
try{module.exports=eddiv;}catch(e){}

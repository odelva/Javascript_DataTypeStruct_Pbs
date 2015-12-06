// the following constructor function should create an object with a push and pop method
// do not use the built-in array type or its methods
function Erray() {
  this.contents = {};
  this.length=0;
  this.push=function(element){
  	
  	this.contents[this.length]=element;
  	this.length++;
  	
  }

  this.pop=function(){
  	var popped=this.contents[this.length-1];
  	delete this.contents[this.length-1];
  	this.length--;
  	return popped;
  }
  this.shift=function(){
  	
  	
  	if (this.length===0){
  		return undefined;
  	}
  	else{
  	var shifted=this.contents[0];

  	
  	for (var i=0; i<this.length-1; i++){
  		this.contents[i]=this.contents[i+1];
 	}
 	delete this.contents[this.length-1];
 	this.length--;
 	return shifted;
 	}
	}
  this.unshift=function(element){
  	this.contents[this.length]=this.contents[this.length-1];
  	for (var i=this.length-1; i>0; i--){
  		this.contents[i]=this.contents[i-1];

  	}
  	this.contents[0]=element;
 	this.length++;

  }
 }




var array = new Erray;

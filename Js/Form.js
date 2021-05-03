class Form{
    constructor(){

    }

 display(){
 var title=createElement('h2');
 title.html("Car Racing Game"); 
 title.position(470,100);
 
 var greeting = createElement('h3');
 var input = createInput("Name"); 
 var button = createButton('Play');
 input.position(470,220);
 button.position(600,250);

 button.mousePressed(function(){ 
    input.hide(); 
    button.hide();
    var name=input.value();
    greeting.html("hello"+name);
    greeting.position(130,160);
 })

}


}
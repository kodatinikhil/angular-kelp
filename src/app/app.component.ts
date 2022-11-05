import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(){

  }
  ngOnInit(){
    var form = document.getElementById("form");
    form.addEventListener('submit', function(e){
      e.preventDefault();
      //console.log(e);
      var inputValue =(<HTMLInputElement>document.getElementById("mySearch")).value;

     var gitName=inputValue.split(" ").join('');
     // console.log(gitName);
     // alert(gitName);

    })
  }
 

   
}

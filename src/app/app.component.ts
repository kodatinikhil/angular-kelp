import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  user = Array<{name: string, url: string, message: string}>;
  //user=[];
  
  constructor(){
    
 
  }
  
  ngOnInit(){
    let that=this;

    allStorage();
    //console.log(user["adcds fdsvfdvd"]);
      function allStorage() {

        var archive = {}; // Notice change here
        var keys = Object.keys(localStorage);
        //console.log(keys);
        var i = keys.length;

          while ( i-- ) {
            archive[ keys[i] ] = localStorage.getItem( keys[i] );
            that.user[i]=JSON.parse(archive[keys[i]]);
           
            //console.log("Nikhil",that.user[i].name);
          }

      }
      console.log(that.user);

    var form = document.getElementById("form");
    form.addEventListener('submit', function(e){
    
      e.preventDefault();
      //console.log(e);
      var inputValue =(<HTMLInputElement>document.getElementById("mySearch")).value;

     var gitName=inputValue.split(" ").join('');
    //  console.log(gitName);
    //   alert(gitName);

    fetch("https://api.github.com/users/"+gitName)
    .then((result)=>result.json())
    .then(data=>{
      if(!data.message){
        data.message="Successfully !! found the user!"
      }
      else{
        data.login=inputValue,
        data.html_url="Invalid !!"
        //data.message="Successfully !! found the user!"
      }
      var userModel ={
         "name": data.login,
         "url": data.html_url,
         "result":data.message
      };

      const userObj = JSON.stringify(userModel);
      // if(!localStorage.getItem(data.login)){
        localStorage.setItem(data.login, userObj);
      // }
      
      
      //document.getElementById("link").value
      //console.log("Nikhil",userModel);
    })

    })
   
  }


   
}

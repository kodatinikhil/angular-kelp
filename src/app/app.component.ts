import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';
import { ProfileComponent } from './profile/profile.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

interface historyObj {
  name: string;
  link: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent  {
  
  public searchedUser:string;
 public users : any;
 public history: any;
 public hist: Array<historyObj> = [];
 public historyObjs: any[];
 public historyLinks:any [];
  public error: any;
  
  constructor(private appservice:AppService/*private appservice:AppService*/){
    // this.appservice.getUser("kodatinikhil").subscribe((data)=>{
    //   console.warn(data);
    // })
  }

  public searchUser(){
    this.getLocalStorage();
    //to fetch the user
    this.appservice.getUser(this.searchedUser).subscribe( (data)=>{
          this.users=data;
          localStorage.setItem(this.searchedUser, data.html_url);
          //console.log(data.html_url);
    } ,(error)=>{
      this.users=null;
      this.error=error;
      localStorage.setItem(this.searchedUser, error);
      console.log(error);
    })
  }


  public getLocalStorage(){
   
        var archive = {};
        var totalItems=[];
        var items={};
        var itemName=[];
        var itemLink=[];
       // Notice change here
        var keys = Object.keys(localStorage);
        //console.log(keys);
        var i = keys.length;
          while ( i-- ) {
            
            archive[ keys[i] ] = localStorage.getItem( keys[i]);
            items['name']=keys[i];
             items['link']= archive[keys[i]];
             totalItems.push({...items});
             console.log("Nikhil",totalItems);
            itemName.push(keys[i]);
            itemLink.push( archive[ keys[i] ]);
            // console.log("Nikhil",archive);
          }
           //console.log("Nikhil",totalItems);
          //  console.log("Nikhil",itemLink);
          this.history=archive;
          this.historyObjs=itemName;
          this.historyLinks=itemLink;
          this.hist=totalItems;
  }

  
  
  ngOnInit(){
  
    // let that=this;
 //console.log(this.users);
    // allStorage();
    // //console.log(user["adcds fdsvfdvd"]);
    //   function allStorage() {

    //     var archive = {}; // Notice change here
    //     var keys = Object.keys(localStorage);
    //     //console.log(keys);
    //     var i = keys.length;

    //       while ( i-- ) {
    //         archive[ keys[i] ] = localStorage.getItem( keys[i] );
    //         that.user[i]=JSON.parse(archive[keys[i]]);
           
    //         //console.log("Nikhil",that.user[i].name);
    //       }

    //   }
    //   console.log(that.user);

    // var form = document.getElementById("form");
    // form.addEventListener('submit', function(e){
    
    //   e.preventDefault();
    //   //console.log(e);
    //   var inputValue =(<HTMLInputElement>document.getElementById("mySearch")).value;

    //  var gitName=inputValue.split(" ").join('');
    //  that.appservice.getUser(gitName).subscribe(data=>{
       //that.users=data;
       //https://www.youtube.com/watch?v=Ij0KypgKPNs
       //https://www.youtube.com/results?search_query=git+user+API+in+angular
       //https://www.youtube.com/watch?v=PBe2LByOI34
       //https://www.youtube.com/watch?v=zJloWtA7jQI
        //https://www.youtube.com/watch?v=zYCL_9-ZJ9M
       //https://www.youtube.com/watch?v=Jln4YeLiE-0
       //https://www.youtube.com/watch?v=YQBiXW0EDZs
      // if(!data.message){
      //   data.message="Successfully !! found the user!"
      // }
      // else{
      //   data.login=inputValue,
      //   data.html_url="Invalid !!"
      //   //data.message="Successfully !! found the user!"
      // }
      // var userModel ={
      //    "name": data.login,
      //    "url": data.html_url,
      //    "result":data.message
      // };

      // const userObj = JSON.stringify(userModel);
      // // if(!localStorage.getItem(data.login)){
      //   localStorage.setItem(data.login, userObj);
      // }
    //   console.log(data);
    // },
    // error=>{
    //     that.error=error;
    //     console.log(that.error);
    // }
    // )

   
    //  console.log(that.users);
    //   alert(gitName);

    // fetch("https://api.github.com/users/"+gitName)
    // .then((result)=>result.json())
    // .then(data=>{
    //   if(!data.message){
    //     data.message="Successfully !! found the user!"
    //   }
    //   else{
    //     data.login=inputValue,
    //     data.html_url="Invalid !!"
    //     //data.message="Successfully !! found the user!"
    //   }
    //   var userModel ={
    //      "name": data.login,
    //      "url": data.html_url,
    //      "result":data.message
    //   };

    //   const userObj = JSON.stringify(userModel);
    //   // if(!localStorage.getItem(data.login)){
    //     localStorage.setItem(data.login, userObj);
    //   // }
      
      
    //   //document.getElementById("link").value
    //   //console.log("Nikhil",userModel);
    // })

    // })
   
   
  }
   
}

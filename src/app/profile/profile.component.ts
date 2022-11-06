import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() users:any;
  @Input() error:any;
 
  public history:any [];
  constructor() {
    allStorage();
    //console.log(user["adcds fdsvfdvd"]);
      function allStorage() {

        var archive = {}; // Notice change here
        var keys = Object.keys(localStorage);
        //console.log(keys);
        var i = keys.length;

          while ( i-- ) {
            archive[ keys[i] ] = localStorage.getItem( keys[i] );
          
          }

      }

   }

  ngOnInit() {
  }

}
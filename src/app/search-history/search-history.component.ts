import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    // allStorage();
    // //console.log(user["adcds fdsvfdvd"]);
    //   function allStorage() {

    //     var archive = {}; // Notice change here
    //     var keys = Object.keys(localStorage);
    //     //console.log(keys);
    //     var i = keys.length;

    //       while ( i-- ) {
    //         archive[ keys[i] ] = localStorage.getItem( keys[i] );
            
    //         // document.getElementById("result"+i).innerHTML=
    //         // `<a href=${archive[ keys[i] ]}>${keys[i]}</a>`
    //       }

    //   }
  }

}
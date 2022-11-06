import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
@Input() historyObj:any [];
@Input() historyLinks: any[];
@Input()  hist: any[];
  constructor() {
    
   }

  ngOnInit() {
  
  }

}
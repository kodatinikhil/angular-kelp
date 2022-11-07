import { Component, Input, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
@Input() historyObj:any [];
@Input() historyLinks: any[];
@Input()  hist: any[];
@Output() deleteLocalStorage=new EventEmitter<String>();
  constructor() {
    
   }
 
  sendData(data){
  this.deleteLocalStorage.emit(data);
  // localStorage.removeItem("kodatinikhil");
   //console.log(k);
  }

  ngOnInit() {
   // this.deleteLocalStorage.emit("kodatinikhil");
  }

}
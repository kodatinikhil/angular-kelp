import { Component, VERSION, Input, EventEmitter } from '@angular/core';
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
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public searchedUser: string;
  public users: any;
  public history: any;
  public hist: Array<historyObj> = [];
  public historyObjs: any[];
  public historyLinks: any[];
  public error: any;

  constructor(
    private appservice: AppService /*private appservice:AppService*/
  ) {}

  public searchUser() {
    //var gitName=this.searchedUser.split(" ").join('');
    //to fetch the user
    this.appservice.getUser(this.searchedUser).subscribe(
      (data) => {
        this.users = data;
        localStorage.setItem(
          this.searchedUser + ' ' + '{{success Find}}',
          data.html_url
        );
        //localStorage.setItem(this.searchedUser+" "+"success", error);
        this.getLocalStorage();
        //console.log(data.html_url);
      },
      (error) => {
        this.users = null;
        this.error = error;
        localStorage.setItem(
          this.searchedUser + ' ' + '{{Failed Find}}',
          error
        );
        this.getLocalStorage();
        console.log('Nikhil', error);
      }
    );
  }

  public getLocalStorage() {
    var archive = {};
    var totalItems = [];
    var items = {};
    var itemName = [];
    var itemLink = [];
    // Notice change here
    var keys = Object.keys(localStorage);
    //console.log(keys);
    var i = keys.length;
    while (i--) {
      archive[keys[i]] = localStorage.getItem(keys[i]);
      items['name'] = keys[i];
      items['link'] = archive[keys[i]];
      totalItems.push({ ...items });
      // console.log('Nikhil', items);
      itemName.push(keys[i]);
      itemLink.push(archive[keys[i]]);
      // console.log("Nikhil",archive);
    }
    //console.log('Nikhil', totalItems);
    //  console.log("Nikhil",itemLink);
    this.history = archive;
    this.historyObjs = itemName;
    this.historyLinks = itemLink;
    this.hist = totalItems;
  }

  deleteLocalStorage(data) {
    localStorage.removeItem(data);

    this.getLocalStorage();
  }

  ngOnInit() {
    this.getLocalStorage();
    // console.log(localStorage)
    // this.deleteLocalStorage("data");
  }
}

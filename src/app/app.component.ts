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
    this.getLocalStorage();
    //to fetch the user
    this.appservice.getUser(this.searchedUser).subscribe(
      (data) => {
        this.users = data;
        localStorage.setItem(this.searchedUser, data.html_url);
        //console.log(data.html_url);
      },
      (error) => {
        this.users = null;
        this.error = error;
        localStorage.setItem(this.searchedUser, error);
        console.log(error);
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
    console.log("Nikhil",totalItems);
    //  console.log("Nikhil",itemLink);
    this.history = archive;
    this.historyObjs = itemName;
    this.historyLinks = itemLink;
    this.hist = totalItems;
  }

  ngOnInit() {}
}

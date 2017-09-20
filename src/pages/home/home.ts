import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: any;
  constructor(public navCtrl: NavController,public http: HttpClient) {

  }
  ngOnInit(): void {
    const me = this;
    // Make the HTTP request:
    this.http.get('https://dev.atalent.xyz/api/wx_info/get_info.php').subscribe(data => {
      // Read the result field from the JSON response.
      me.result = data;
    });
  }
}

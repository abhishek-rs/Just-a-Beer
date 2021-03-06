import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hangout } from '../../../pages/hangout/hangout';
//import { Profile } from '../../../pages/profile/profile';
import { UserData } from '../../../assets/data/UserData';
import { ProfilePage } from '../../../pages/profile/profile';

@Component({
  selector: 'hangout-card',
  templateUrl: 'hangoutCard.html',
  styles: ['hangoutCard.scss']
})

export class HangoutCard {
@Input('hangout') data: any;
userData = UserData;
date: String;
toTime: String;
fromTime: String;
typeIcon: String;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    let today = new Date();
    if(this.data.fromTime.getDate() === today.getDate()){
      this.date = "TODAY";
    } else {
      this.date = this.data.fromTime.getDate().toLocaleString() + "/" + this.data.fromTime.getMonth().toLocaleString();
    }

    this.fromTime = this.data.fromTime.getHours().toLocaleString();
    this.toTime = this.data.toTime.getHours().toLocaleString();
  }

  handleClick(){
    this.navCtrl.push(Hangout, {data: this.data});
  }

  handleProfileClick(){
    this.navCtrl.push(ProfilePage, {data: this.userData[this.data.owner]});
  }

}

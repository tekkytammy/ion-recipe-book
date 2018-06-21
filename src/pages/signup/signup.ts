import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup(form: NgForm) {
    this.authService.signup(form.value.email, form.value.password)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent {
  inputString: string = '';
  lowerCaseString: string = '';
  upperCaseString: string = '';

  convertToLowercase() {
    this.lowerCaseString = this.inputString.toLowerCase();
  }

  convertToUppercase() {
    this.upperCaseString = this.inputString.toUpperCase();
  }
}
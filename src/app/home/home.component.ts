import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public name = '';
  displayname = false;
  public color = 'blue';
  public colors = ['red', 'green', 'blue'];

  public nameChild = 'child component';
  public message = '';
  public date = new Date();
  public person = 'andy';

  ngOnInit(): void {}

  display(value) {
    alert('display something!' + value);
  }

  onChange(value) {
    console.log(value);
  }
}

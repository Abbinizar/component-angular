import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.childEvent.emit('for parrent');
  }
}

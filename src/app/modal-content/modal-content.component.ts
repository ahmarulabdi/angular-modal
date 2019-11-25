import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

  passBack() {
    this.passEntry.emit(this.user);
  }

}

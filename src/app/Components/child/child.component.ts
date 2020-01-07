import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<boolean>();
mesagetoparent = 'hello';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  sendMessage() {
    console.log(this.mesagetoparent);
    this.messageEvent.emit(true);
    // this.router.navigate(['/parent']);
  }
}

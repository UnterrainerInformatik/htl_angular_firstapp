import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {

  @Input() name: string = ''
  @Input() text: string = ''
  @Output() click = new EventEmitter<void>()

  constructor () { }

  ngOnInit (): void {
  }

  onClick () {
    this.click.emit()
  }
}

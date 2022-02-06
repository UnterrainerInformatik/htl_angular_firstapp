import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})

export class TextFieldComponent implements OnInit {

  @Input() item: string = ''
  @Output() itemChange = new EventEmitter<string>()

  constructor () { }

  ngOnInit (): void {
  }

  onItemChange (value: string) {
    this.itemChange.emit(value)
  }
}

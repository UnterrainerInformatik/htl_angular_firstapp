import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-component',
  templateUrl: './checkbox-component.component.html',
  styleUrls: ['./checkbox-component.component.css']
})
export class CheckboxComponentComponent implements OnInit {
  
  @Input() name: string = ''
  @Input() text: string = ''
  @Input() state: boolean = false
  @Output() stateChange = new EventEmitter<boolean>()

  constructor () { }

  ngOnInit (): void {
  }

  onStateChange (value: any) {
    this.state = value.checked
    this.stateChange.emit(this.state)
  }
}

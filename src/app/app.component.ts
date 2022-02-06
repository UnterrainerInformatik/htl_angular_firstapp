import { Component } from '@angular/core';

interface TestRecord {
  test: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'firstapp';
  isTest: boolean = true
  currentItem = {
    name: 'Gerald'
  }
  testRecord: TestRecord = {
    test: false
  }

  ngOnInit () {
    this.testRecord = {
      test: this.isTest
    }
  }
}

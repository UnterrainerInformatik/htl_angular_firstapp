import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ButtonComponentComponent } from './button-component/button-component.component';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';



@NgModule({
  declarations: [
    ButtonComponentComponent,
    CheckboxComponentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    ButtonComponentComponent,
    CheckboxComponentComponent
  ]
})
export class MyComponentsModule { }

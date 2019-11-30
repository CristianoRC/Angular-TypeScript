import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OlaComponent } from './ola/ola.component';

@NgModule({
  declarations: [OlaComponent],
  imports: [
    CommonModule,
  ],
  exports: [OlaComponent]
})
export class OlaMundoModule { }

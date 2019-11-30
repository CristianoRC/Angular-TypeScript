import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OlaMundoModule } from './ola-mundo/ola-mundo.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OlaMundoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

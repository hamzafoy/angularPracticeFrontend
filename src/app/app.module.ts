import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetService } from './widgets/widgets.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

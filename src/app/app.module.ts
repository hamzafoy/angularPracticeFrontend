import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetService } from './widgets/widgets.service';
import { RatingComponent } from './rating/rating.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    RatingComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

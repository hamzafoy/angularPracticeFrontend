import { Component, OnInit, Input } from '@angular/core';
import { WidgetService } from './widgets.service';
import Widget from '../widget';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {

  tools: string[] = [];
  widgets: Array<Widget> = [];
  title: string = "Tools used to develop Widgets";
  isValid: boolean = false;
  // onClickMe($event: any) {
  //   console.log("Clicked", $event)
  // }

  constructor(widgetService: WidgetService) {
    this.tools = widgetService.getTools();
    this.widgets = widgetService.getWidgets();
   }

  ngOnInit(): void {
  }

}
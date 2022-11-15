import { Component, OnInit } from '@angular/core';
import { WidgetService } from './widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  tools: string[] = [];
  title: string = "Tools used to develop Widgets";
  isValid: boolean = false;
  onClickMe($event: any) {
    console.log("Clicked", $event)
  }

  constructor(widgetService: WidgetService) {
    this.tools = widgetService.getTools();
   }

  ngOnInit(): void {
  }

}
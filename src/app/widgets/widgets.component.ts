import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  tools: string[] = ["Angular", ".NET", "SQL"]
  title: string = "Tools used to develop Widgets"

  constructor() { }

  ngOnInit(): void {
  }

}

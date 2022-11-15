import { Component, OnInit, Input } from '@angular/core';
import Widget from '../widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styles: [
    'app-rating { color: skyblue; }'
  ]
})
export class WidgetComponent implements OnInit {
  @Input() data: Widget = {
    name: '',
    rating: 0,
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exmple-ngconyent';

  sayHello: boolean = true;
  name="Item1"
  item1={name:"ABC"}
  items: any[] = [
    {
      id: 1,
      name: "item1"
    },
    {
      id: 2,
      name: "item2"
    },
    {
      id:null,
      name:"item3"
    }
  ];
}

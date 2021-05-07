import { Component,TemplateRef,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exmple-ngconyent';

  sayHello: boolean = true;
  @Input() footertemplate:TemplateRef<any>
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

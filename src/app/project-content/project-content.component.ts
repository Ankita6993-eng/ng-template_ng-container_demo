import { Component, OnInit ,Input,TemplateRef} from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {
@Input() footertemplate:TemplateRef<any>
  constructor() { }

  ngOnInit(): void {
  }

}

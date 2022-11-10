import { Component, OnInit } from '@angular/core';
import { GlobalFacadeService } from './store/global-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-template';

  constructor(private facade: GlobalFacadeService) {}

  ngOnInit() {
    this.facade.setExample('this is an example')
  }
}

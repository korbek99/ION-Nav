import { Component } from '@angular/core';
import { HomePage } from '../home/home'
import { AjustesPage } from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = HomePage;
    this.tab2 = AjustesPage;
  }
  

}

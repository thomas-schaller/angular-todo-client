import { Component, OnInit } from '@angular/core';
import {TachesService} from "../taches.service";
import {ListeTaches} from "../listeTaches";

@Component({
  selector: 'app-liste-taches-list',
  templateUrl: './liste-taches-list.component.html',
  styleUrls: ['./liste-taches-list.component.css']
})
export class ListeTachesListComponent implements OnInit {
  listeTaches:ListeTaches[];

  constructor(private serviceTaches:TachesService) {
  }

  ngOnInit() {
    this.serviceTaches.getListesTaches().subscribe(
      listeTaches => this.listeTaches=listeTaches
    );
  }

}

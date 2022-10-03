import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-services',
  templateUrl: './tree-services.component.html',
  styleUrls: ['./tree-services.component.scss']
})
export class TreeServicesComponent implements OnInit {

  public cards: any[] = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepOneComponent } from './dialogs/step-one/step-one.component';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  stepOne() {
    this.dialog.open(StepOneComponent, {
      height: '300px',
      width: '300px'
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepOneComponent } from './dialogs/step-one/step-one.component';
import { StepThreeComponent } from './dialogs/step-three/step-three.component';
import { StepTwoComponent } from './dialogs/step-two/step-two.component';

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
      height: '500px',
      width: '300px'
    });
  }

  stepTwo() {
    this.dialog.open(StepTwoComponent, {
      height: '500px',
      width: '300px'
    });
  }

  stepThree() {
    this.dialog.open(StepThreeComponent, {
      height: '500px',
      width: '300px'
    });
  }

}

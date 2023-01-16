import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'seekmake-step-progress',
  templateUrl: './step-progress.component.html',
  styleUrls: ['./step-progress.component.scss'],
})
export class StepProgressComponent {
  @Input()
  steps: number[] = [];
}

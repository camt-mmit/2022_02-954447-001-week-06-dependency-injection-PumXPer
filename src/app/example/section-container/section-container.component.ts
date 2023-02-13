import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createInput, InputContainerComponent, InputType } from '../input-container/input-container.component';

export type SectionType = InputType[];

export function createSection(): SectionType {
  return [createInput()];
}
@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule, InputContainerComponent],
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent {
  @Input()  no!: number;
  @Input()  data!: SectionType;
  @Input()  removeable: boolean = true;

  @Output() removeSec = new EventEmitter<void>();
  @Output() dataChange = new EventEmitter<SectionType | null>();

  ngOnInit(): void {
    if (!this.data || !this.no) {
      throw new Error('SectionContainerComponent: value is required');
    }
  }

  addInput():void {
    this.dataChange.emit(this.data);
    this.data.push(createInput());
  }

  removeChild(index: number): void {
    this.data.splice(index, 1);
  }

  onRemoveSection(): void {
    this.removeSec.emit();
    this.dataChange.emit(null);
  }

  onChanged(): void {
    this.dataChange.emit(this.data);
  }

  getResult(): number {
    return this.data
    .map((item) => item.value)
    .reduce((carely, value) => carely + value, 0);
  }
}

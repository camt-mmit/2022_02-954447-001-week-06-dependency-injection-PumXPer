import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionType } from '../../section-container/section-container.component';
import { ExampleDataService } from '../../example-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-display-section-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-display-section-page.component.html',
  styleUrls: ['./example-display-section-page.component.scss']
})
export class ExampleDisplaySectionPageComponent {
  data: SectionType;

  constructor(
    private dataService: ExampleDataService,
    private route: ActivatedRoute,
  ) {
    const sections = this.dataService.load();
    this.data = sections[this.route.snapshot.params['index']];
  }

  // data: SectionType[];

  // constructor(private dataService: ExampleDataService) {
  //   this.data = this.dataService.load();
  // }

  getResult(): number{
    return this.data
          .map((item) => item.value)
          .reduce((carry, value) => carry + value, 0);
  }
}

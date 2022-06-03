import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {


  // External data component
  @Input()
  rating: number = 0;

  starWidth: number = 0;

  // In this case uses OnChanges instead OnInit
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 74 / 5;
  }

}

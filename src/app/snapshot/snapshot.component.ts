import {Component, Input} from '@angular/core';
import {SafeImage} from './image.model';
import {DomSanitizer} from '@angular/platform-browser';
import {listImages} from '../utils/image.utils';


@Component({
  selector: 'app-snapshot',
  template: `
    <mat-grid-list [cols]="maxCols" rowHeight="100px">
      <mat-grid-tile
        *ngFor="let image of images"
        [colspan]="image.cols"
        [rowspan]="image.rows">
        <div [style.background-image]="image.src"></div>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent {
  maxCols = 6;

  images: SafeImage[];

  constructor(private sanitizer: DomSanitizer) {
  }

  @Input() set totalImages(totalImages: number) {
    this.maxCols = totalImages % 6 || 6;
    this.images = listImages(totalImages, this.maxCols)
      .map(image => ({...image, src: this.sanitizer.bypassSecurityTrustStyle(image.src)}));
  }


}

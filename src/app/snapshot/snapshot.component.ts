import {Component, Input} from '@angular/core';
import {Image} from './image.model';
import {DomSanitizer} from '@angular/platform-browser';

const IMAGE_SOURCE = 'https://picsum.photos/600';

@Component({
  selector: 'app-snapshot',
  template: `
    <mat-grid-list [cols]="maxCols" rowHeight="100px">
      <mat-grid-tile
        *ngFor="let image of images"
        [colspan]="image.cols"
        [rowspan]="image.rows">
        <div
          [style.background-image]="image.src"></div>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent {
  maxCols = 6;

  images: Image[];

  constructor(private sanitizer: DomSanitizer) {}

  @Input() set totalImages(totalImages: number) {
    this.maxCols = totalImages % 6 || 6;
    const images: Image[] = [];
    for (let i = 0; i < totalImages; i++) {
      images.push({
        id: i,
        src: this.sanitizer.bypassSecurityTrustStyle(this.generateRandomUrl(i)),
        rows: this.getRows(i, totalImages),
        cols: this.getCols(i, totalImages)
      });
    }
    this.images = images;
  }

  private getRows(id: number, totalElements: number) {
    return (totalElements - id) % this.maxCols || 1;
  }


  private getCols(id: number, totalElements: number) {
    return Math.floor((id % this.maxCols) / 3 + 1);
  }

  private generateRandomUrl(id: number) {
    return `url("${IMAGE_SOURCE}?random=${id})`;
  }
}

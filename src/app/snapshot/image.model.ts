import {SafeUrl} from '@angular/platform-browser';

export interface Image {
  readonly src: string;
  readonly id: number;
  readonly cols: number;
  readonly rows: number;
}

export interface SafeImage {
  readonly src: SafeUrl;
  readonly id: number;
  readonly cols: number;
  readonly rows: number;
}

import {SafeUrl} from '@angular/platform-browser';

export interface Image {
  readonly src: SafeUrl;
  readonly id: number;
  readonly cols: number;
  readonly rows: number;
}

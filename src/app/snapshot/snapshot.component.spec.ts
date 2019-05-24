import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotComponent } from './snapshot.component';
import {MatGridListModule} from '@angular/material';

describe('SnapshotComponent', () => {
  let component: SnapshotComponent;
  let fixture: ComponentFixture<SnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotComponent ],
      imports: [MatGridListModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('we have 10 images to visualise', () => {
    it('should render 10 images in our template', () => {
      component.totalImages = 10;
      fixture.detectChanges();
      expect(fixture).toMatchSnapshot();
    });
  });
});

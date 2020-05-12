import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlPageComponent } from './ml-page.component';

describe('MlPageComponent', () => {
  let component: MlPageComponent;
  let fixture: ComponentFixture<MlPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

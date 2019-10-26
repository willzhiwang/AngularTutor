import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepitComponent } from './recipe.component';

describe('RecepitComponent', () => {
  let component: RecepitComponent;
  let fixture: ComponentFixture<RecepitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

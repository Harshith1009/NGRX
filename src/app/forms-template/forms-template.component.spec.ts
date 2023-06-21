import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTemplateComponent } from './forms-template.component';

describe('FormsTemplateComponent', () => {
  let component: FormsTemplateComponent;
  let fixture: ComponentFixture<FormsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

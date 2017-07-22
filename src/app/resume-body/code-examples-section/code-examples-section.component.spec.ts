import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExamplesSectionComponent } from './code-examples-section.component';

describe('CodeExamplesSectionComponent', () => {
  let component: CodeExamplesSectionComponent;
  let fixture: ComponentFixture<CodeExamplesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExamplesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExamplesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

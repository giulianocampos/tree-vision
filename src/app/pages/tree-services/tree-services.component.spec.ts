import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeServicesComponent } from './tree-services.component';

describe('TreeServicesComponent', () => {
  let component: TreeServicesComponent;
  let fixture: ComponentFixture<TreeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

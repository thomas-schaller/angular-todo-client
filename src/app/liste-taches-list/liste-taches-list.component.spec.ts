import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTachesListComponent } from './liste-taches-list.component';

describe('ListeTachesListComponent', () => {
  let component: ListeTachesListComponent;
  let fixture: ComponentFixture<ListeTachesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTachesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTachesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

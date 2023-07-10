import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentlistPage } from './studentlist.page';

describe('StudentlistPage', () => {
  let component: StudentlistPage;
  let fixture: ComponentFixture<StudentlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
s
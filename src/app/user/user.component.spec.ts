import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

describe('UserListComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  class MockUserService {
    name = 'John Doe';
    age = 20;
    desc = 'testDesc'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent, FormsModule, ReactiveFormsModule],
      providers: [ UserComponent, { provide: UserService, useClass: MockUserService } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.create()).toBeTruthy();
  });
  
});

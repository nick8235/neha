import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyFlightPage } from './my-flight.page';

describe('MyFlightPage', () => {
  let component: MyFlightPage;
  let fixture: ComponentFixture<MyFlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFlightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

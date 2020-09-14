import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TastingroompopupPage } from './tastingroompopup.page';

describe('TastingroompopupPage', () => {
  let component: TastingroompopupPage;
  let fixture: ComponentFixture<TastingroompopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingroompopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TastingroompopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

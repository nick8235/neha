import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TastingroomPage } from './tastingroom.page';

describe('TastingroomPage', () => {
  let component: TastingroomPage;
  let fixture: ComponentFixture<TastingroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TastingroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

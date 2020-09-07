import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhiskypicPage } from './whiskypic.page';

describe('WhiskypicPage', () => {
  let component: WhiskypicPage;
  let fixture: ComponentFixture<WhiskypicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskypicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhiskypicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

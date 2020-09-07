import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HighlightPage } from './highlight.page';

describe('HighlightPage', () => {
  let component: HighlightPage;
  let fixture: ComponentFixture<HighlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

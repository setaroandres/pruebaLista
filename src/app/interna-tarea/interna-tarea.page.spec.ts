import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternaTareaPage } from './interna-tarea.page';

describe('InternaTareaPage', () => {
  let component: InternaTareaPage;
  let fixture: ComponentFixture<InternaTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternaTareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternaTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

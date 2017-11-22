import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { BasicInputsPageComponent } from './basic-inputs-page.component';

describe('InputsTestPageComponent', () => {
  let component: BasicInputsPageComponent;
  let fixture: ComponentFixture<BasicInputsPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BasicInputsPageComponent],
        imports: [FormsModule, SharedModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('testInputOne binding', () => {
    let input;
    beforeEach(
      fakeAsync(() => {
        component.ngOnInit();
        fixture.detectChanges();
        tick();
        const ionInput = fixture.debugElement.query(By.css('#inputOne'));
        input = ionInput.query(By.css('input')).nativeElement;
      })
    );

    it('should reflect changes to the input', () => {
      expect(input).toBeTruthy();
      input.value = 'Frank';
      input.dispatchEvent(new Event('input'));
      expect(component.testInputOne).toEqual('Frank');
    });
  });
});

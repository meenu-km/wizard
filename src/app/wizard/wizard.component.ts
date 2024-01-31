import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
 selector: 'app-wizard',
 templateUrl: './wizard.component.html',
 styleUrl: './wizard.component.css'
})
export class WizardComponent implements AfterContentInit {
 @ContentChildren(WizardStepComponent) steps!: QueryList<WizardStepComponent>;

 ngAfterContentInit() {
    this.steps.first.active = true;
 }

 selectStep(selectedStep: WizardStepComponent) {
    this.steps.forEach(step => (step.active = false));
    selectedStep.active = true;
 }
}

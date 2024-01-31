import { Component, ViewChild } from '@angular/core';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'angular-wizard';
 @ViewChild('wizard') wizard!: WizardComponent;

 nextStep() {
    const activeStepIndex = this.getActiveStepIndex();
    if (activeStepIndex < this.wizard.steps.length - 1) {
      this.wizard.selectStep(this.wizard.steps.toArray()[activeStepIndex + 1]);
    }
 }

 prevStep() {
    const activeStepIndex = this.getActiveStepIndex();
    if (activeStepIndex > 0) {
      this.wizard.selectStep(this.wizard.steps.toArray()[activeStepIndex - 1]);
    }
 }

 skipStep() {
    this.nextStep();
 }

 private getActiveStepIndex(): number {
    return this.wizard.steps.toArray().findIndex((step :WizardStepComponent) => step.active);
 }
}

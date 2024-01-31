import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-wizard-step',
 templateUrl: './wizard-step.component.html',
 styleUrl: './wizard-step.component.css'
})
export class WizardStepComponent {
 @Input() title!: string;
 @Input() icon!: string;
 @Input() active = false;
}

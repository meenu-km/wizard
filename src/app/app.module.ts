import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component'; // Import the new module here
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { CommonModule } from '@angular/common';

@NgModule({
 declarations: [
    AppComponent,
    WizardStepComponent,
    WizardComponent
 ],
 imports: [
    BrowserModule,
    CommonModule
 ],
 bootstrap:[AppComponent]
})
export class AppModule { }

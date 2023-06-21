import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { StrengthBarComponent } from './components/strength-bar/strength-bar.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    StrengthBarComponent,
    CustomInputComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

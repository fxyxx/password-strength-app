import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  passwordForm: FormGroup;
  strength = 0;

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.passwordForm = new FormGroup({
      password: new FormControl(''),
    });

    this.passwordForm.get('password')?.valueChanges.subscribe((value) => {
      this.strength =
        this.passwordStrengthService.calculatePasswordStrength(value);
      this.updateStrengthBarColors();
    });
  }

  updateStrengthBarColors() {
    const strengthBars = document.querySelectorAll('.strength-bar div');

    strengthBars.forEach((bar, index) => {
      const barElement = bar as HTMLElement;
      if (this.strength === -1) {
        barElement.style.backgroundColor = 'gray';
      } else if (this.strength === 0) {
        barElement.style.backgroundColor = 'red';
      } else if (index < this.strength) {
        if (this.strength === 1) {
          barElement.classList.add('active');
          barElement.style.backgroundColor = 'red';
        } else if (this.strength === 2) {
          barElement.classList.add('active');
          barElement.style.backgroundColor = 'yellow';
        } else if (this.strength === 3) {
          barElement.classList.add('active');
          barElement.style.backgroundColor = 'green';
        }
      } else {
        barElement.classList.remove('active');
        barElement.style.backgroundColor = 'gray';
      }
    });
  }
}

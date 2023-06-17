import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  password = '';
  strength = 0;

  onPasswordChange() {
    const hasLetters = /[a-zA-Z]/.test(this.password); //only eng alphabet
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /\W/.test(this.password);

    if (this.password.length === 0) {
      this.strength = -1;
    } else if (this.password.length < 8) {
      this.strength = 0;
    } else if (
      (hasLetters && !hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits && !hasSymbols) ||
      (!hasLetters && !hasDigits && hasSymbols)
    ) {
      this.strength = 1;
    } else if (
      (hasLetters && hasDigits && !hasSymbols) ||
      (hasLetters && !hasDigits && hasSymbols) ||
      (!hasLetters && hasDigits && hasSymbols)
    ) {
      this.strength = 2;
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.strength = 3;
    }

    this.updateStrengthBarColors();
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

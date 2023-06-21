import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculatePasswordStrength(password: string): number {
    const hasLetters = /[a-zA-Z]/.test(password); //only eng alphabet
    const hasDigits = /\d/.test(password);
    const hasSymbols = /\W/.test(password);

    if (password.length === 0) {
      return -1;
    } else if (password.length < 8) {
      return 0;
    } else if (
      (hasLetters && !hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits && !hasSymbols) ||
      (!hasLetters && !hasDigits && hasSymbols)
    ) {
      return 1;
    } else if (
      (hasLetters && hasDigits && !hasSymbols) ||
      (hasLetters && !hasDigits && hasSymbols) ||
      (!hasLetters && hasDigits && hasSymbols)
    ) {
      return 2;
    } else if (hasLetters && hasDigits && hasSymbols) {
      return 3;
    }
    return 0;
  }
}

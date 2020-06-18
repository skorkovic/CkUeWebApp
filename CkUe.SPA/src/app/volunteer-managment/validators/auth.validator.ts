import { AbstractControl } from '@angular/forms';

export function validatePasswordLengthValid(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    if ((control.value.toString().length > 16)
      || (control.value.toString().length < 8)
      || (control.value.toString().trim().length === 0)) {
      return {
        invalidLengthPass: true
      };
    }
  }
  return null;
}

export function validatePasswordOneUpperLetter(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    const passString = control.value;
    if (/[A-Z]/.test(passString)) {
      return null;
    }
  }
  return {
    invalidOneUpLetter: true
  };
}

export function validatePasswordThreeLowerLetters(control: AbstractControl) {
  let numLowerLetters = 0;
  if (control && control.value !== null && control.value !== undefined) {
    const passString = control.value;
    for (let i = 0; i < passString.length; i++) {
      const char = passString.charAt(i);
      if (/[a-z]/.test(char)) {
        numLowerLetters++;
        if (numLowerLetters >= 3) {
          return null;
        }
      }
    }
  }
  return {
    invalidThreeLowerLetters: true
  };
}

export function validatePasswordOneNumeric(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    const passString = control.value;
    if (/[0-9]/.test(passString)) {
      return null;
    }
  }
  return {
    invalidOneNumeric: true
  };
}

export function validatePasswordOneSymbolFromSet(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    const passString = control.value;
    if (/[#*.!?$]/.test(passString)) {
      return null;
    }
  }
  return {
    invalidOneSymbolFromSet: true
  };
}

export function validatePasswordFirstCharIsLetter(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    const passFirstSymbol = control.value.charAt(0);
    if (/[a-zA-Z]/.test(passFirstSymbol)) {
      return null;
    }
  }
  return {
    invalidFirstSymbolIsLetter: true
  };
}

export function validatePasswordFirstCharIsLetterOrNumeric(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    const passFirstSymbol = control.value.charAt(0);
    if (/[a-zA-Z0-9]/.test(passFirstSymbol)) {
      return null;
    }
  }
  return {
    invalidFirstSymbolIsLetterOrNumeric: true
  };
}


export function validatePasswordNeighboringSymbolsNotSame(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    const passString = control.value;
    if (passString.length === 0) {
      return {
        invalidSameNeighboringSymbols: true
      };
    }
    for (let i = 0; i < passString.length - 1; i++) {
      const char1 = passString.charAt(i);
      const char2 = passString.charAt(i + 1);
      if (char1 === char2) {
        return {
          invalidSameNeighboringSymbols: true
        };
      }
    }
  }
  return null;
}

export function validatePasswordConfirmMatchRegister(control: AbstractControl) {
  const mainPasswordControl = control.root.get('password');
  if (mainPasswordControl != null && control && control.value !== null && control.value !== undefined) {
    console.log(mainPasswordControl.value);
    const confirmPassword = control.value;
    if (mainPasswordControl !== null) {
      const mainPassword = mainPasswordControl.value;
      if (mainPassword === '' || !(mainPassword === confirmPassword)) {
        return {
          invalidConfirmPassword: true
        };
      }
    }
  }
  return null;
}

export function validatePasswordConfirmMatchChangePassword(control: AbstractControl) {
  const mainPasswordControl = control.root.get('password');
  if (mainPasswordControl != null && control && control.value !== null && control.value !== undefined) {
    console.log(mainPasswordControl.value);
    const confirmPassword = control.value;
    if (mainPasswordControl !== null) {
      const mainPassword = mainPasswordControl.value;
      if (mainPassword === '' || !(mainPassword === confirmPassword)) {
        return {
          invalidConfirmPassword: true
        };
      }
    }
  }
  return null;
}

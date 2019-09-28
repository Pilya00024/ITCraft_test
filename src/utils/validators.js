/* eslint-disable no-useless-escape */
 const validateCyrillic = (value) => {
    const re = /[а-яА-ЯЁё]/;
    return !re.test(value);
  };

  const validateNumber = (value) => {
      const re = /[0-9]/;
      return re.test(value);
  }
  const validateSymbol = (value) => {
      const re = /[^\d\sA-Z]/gi;
      return re.test(value);
  }

  const validateLetter = (value) => {
      const re = /[a-zA-z]/;
      return re.test(value);
  }
  
  
  export const validateEmail = (email) => {
    const re = /[a-z0-9\._%+!$&*=^|~#'`?{}\/\-]+@([a-z0-9\-]{2,16}\.[a-z]{2,8}$)/;
    return re.test(email) && validateCyrillic(email) && email.indexOf(' ') === -1 && email.split('@')[0].length <= 64;
  };

  
  export const validatePassword = (password) => {
    const minPasswordLength = 8;
  
    return password.length >= minPasswordLength 
            && validateNumber(password) 
            && validateSymbol(password) 
            && validateLetter(password) 
            && validateCyrillic(password);
  };
  
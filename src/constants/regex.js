  export const isEmail = email => {
    const regEx = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
  export const containsLowerCase = password => {
    const regEx = "^(?=.*[a-z])";
    if (password.match(regEx)) return true;
    else return false;
  };
  export const containsUpperCase = password => {
    const regEx = "^(?=.*[A-Z])";
    if (password.match(regEx)) return true;
    else return false;
  };

  export const containsSpecial = password => {
    const regEx = "^(?=.*[@#$%])";
    if (password.match(regEx)) return true;
    else return false;
  };

  export const containsNumber = password => {
    const regEx = "^(?=.*[0-9])";
    if (password.match(regEx)) return true;
    else return false;
  };

  export const containsEight = password => {
    const regEx = "^(?=.{8,})";
    if (password.match(regEx)) return true;
    else return false;
  };
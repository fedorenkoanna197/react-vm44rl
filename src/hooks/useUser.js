import { useState, useEffect } from 'react';
const getData = (ele) => {
  for (const key in ele) {
    conso.log(ele[key]);
  }
};

export const useUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [click, setClick] = useState(false);
  const [result, setResult] = useState();

  const changeEmail = (element) => {
    setEmail(element);
  };
  const changePassword = (element) => {
    setPassword(element);
  };
  const changePasswordConfirm = (element) => {
    setConfirmPassword(element);
  };

  const changeClick = () => {
    if (email !== '' && password !== '' && confirmPassword !== '') {
      setClick((prev) => !prev);
    }
  };
  useEffect(() => {
    if (click) {
      fetch('https://react-course-api.azurewebsites.net/user', {
        body: JSON.stringify({
          name: email,
          password: password,
          passwordConfirmation: confirmPassword,
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((x) => x.json())
        .then((data) => getData(data));
    }
  }, [click]);

  return [
    changeEmail,
    changePassword,
    changePasswordConfirm,
    changeClick,
    result,
  ];
};

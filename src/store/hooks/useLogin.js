import {useCallback} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/slices/userSlice';
import {END_POINTS} from '../api';

const useLogin = () => {
  const dispatch = useDispatch();
  return useCallback(
    ({username, password}) => {
      axios
        .post(
          END_POINTS.login,
          {
            username: username,
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          dispatch(setUser(response.data));
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    [dispatch],
  );
};

export default useLogin;

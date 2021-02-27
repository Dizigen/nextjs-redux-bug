import React, { useEffect } from 'react';
import { setEmail } from '../store/email.reducer';
import { useSelector, useDispatch } from 'react-redux';

/**
 * dispatches don't work inside useEffects in dynamic routes or routes with query parameter
 * to reproduce:
 * navigate to /test => notice the email is set
 * navigate to /dsa (or anything else) => notice email is not set
*/
export default function dynamic() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.email);
  useEffect(() => {
    dispatch(setEmail('dsas@dsa.com'));
  }, []);
  return <div>Email (Redux State): {email}</div>;
}

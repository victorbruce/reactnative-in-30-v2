import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState<any>();

  const getUser = async () => {
    try {
      const doc = await firestore()
        .collection('users')
        .doc(auth().currentUser?.uid)
        .get();
      if (doc.exists) {
        setUser(doc.data());
      }
    } catch (error) {
      console.log('user-context', 'failed to get user');
      return error;
    }
  };

  useEffect(() => {
    getUser();

    return;
  }, []);

  const value = {
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

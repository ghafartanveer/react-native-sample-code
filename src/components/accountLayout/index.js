import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../store/slices/userSlice';
import styles from './styles';

const AccountLayout = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.user);

  return (
    <>
      <Text style={styles.title}>Welcome...</Text>
      <View style={styles.container}>
        <Image source={{uri: data?.user?.image}} style={styles.profileImage} />

        <Text style={styles.username}>{data?.user?.username}</Text>
        <Text style={styles.email}>{data?.user?.email}</Text>
        <Text
          style={
            styles.name
          }>{`${data?.user?.firstName} ${data?.user?.lastName}`}</Text>
        <Text style={styles.gender}>{`Gender: ${data?.user?.gender}`}</Text>

        <TouchableOpacity
          onPress={() => dispatch(setUser(null))}
          style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AccountLayout;

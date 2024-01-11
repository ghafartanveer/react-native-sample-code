import React from 'react';
import {SafeAreaView, View, Text, Button, TextInput, Image} from 'react-native';
import {loginValidationSchema} from '../../constants';
import useLogin from '../../store/hooks/useLogin';
import {Formik} from 'formik';
import styles from './styles';
import {IC_LAUNCHER} from '../../assets';
import Colors from '../../constants/Colors';

const LoginLayout = () => {
  const loginUser = useLogin();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Image source={IC_LAUNCHER} style={styles.appLogo} />
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{username: '', password: ''}}
            onSubmit={loginUser}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <TextInput
                  name="username"
                  placeholder="Username"
                  style={styles.textInput}
                  placeholderTextColor={Colors.BLACK.light_7}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  keyboardType="email-address"
                />
                {errors.username && touched.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}
                <TextInput
                  name="password"
                  placeholder="Password"
                  placeholderTextColor={Colors.BLACK.light_7}
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <Button
                  color={Colors.BLUE.default}
                  onPress={handleSubmit}
                  title="Login"
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginLayout;

import React from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import styles from './styles';
import {IC_SEARCH} from '../../assets';
import Colors from '../../constants/Colors';

const SearchInput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputCotainer}>
        <Image source={IC_SEARCH} style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={Colors.BLACK.light_7}
          style={styles.textInput}
          {...props}
        />
      </View>
      {props.value.length > 0 && (
        <Button
          color={Colors.BLUE.default}
          title="Clear"
          onPress={() => props.onChangeText(() => '')}
        />
      )}
    </View>
  );
};

export default SearchInput;

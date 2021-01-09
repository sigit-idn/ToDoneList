import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  View,
  Text,
  CheckBox,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const ListItem = (props) => {
  const minutes = Math.floor(
    (props.list.duration % (1000 * 60 * 60)) / (1000 * 60),
  );
  const seconds = Math.floor((props.list.duration % (1000 * 60)) / 1000);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={styles.verticalCenter}>
      <CheckBox
        value={isSelected}
        onValueChange={setIsSelected}
        style={styles.CheckBox}
      />
      <TouchableHighlight>
        <View style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {props.list.title}
          </Text>
          <Text style={{color: '#3b3b3b'}}>{props.list.subtitle}</Text>
        </View>
      </TouchableHighlight>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          right: 10,
          top: 10,
        }}>
        <FontAwesomeIcon icon={faPlay} />
        <Text>
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalCenter: {
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    position: 'relative',
  },
  CheckBox: {
    height: '100%',
  },
});

export default ListItem;

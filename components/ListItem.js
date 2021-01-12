import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {View, Text, CheckBox, TouchableHighlight} from 'react-native';

const ListItem = (props) => {
  const minutes = Math.floor(
    (props.list.duration % (1000 * 60 * 60)) / (1000 * 60),
  );
  const seconds = Math.floor((props.list.duration % (1000 * 60)) / 1000);
  const [isSelected, setIsSelected] = useState(false);
  const setSelection = () => {
    setIsSelected(true);
    props.setSelected(props.listIndex);
  }
  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        alignContent: 'center',
        position: 'relative',
      }}>
      <CheckBox
        value={isSelected}
        onValueChange={setIsSelected}
        style={{height: '100%'}}
      />
      <TouchableHighlight>
        <View style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {props.list.title}
          </Text>
          <Text style={{color: '#3b3b3b'}}>{props.list.subtitle}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          position: 'absolute',
          height: '100%',
          justifyContent: 'center',
          right: 10,
          top: 10,
        }}
        onPress={setSelection}>
        <View>
          <FontAwesomeIcon icon={faPlay} style={{marginLeft: 10}} />
          <Text>
            {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
export default ListItem;

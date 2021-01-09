import React, {useState} from 'react';
import {View} from 'react-native';
import ListItem from './ListItem';
import Timer from './Timer';
import AddItem from './AddItem';

const Main = () => {
  const [selected, setSelected] = useState(0);
  const [lists, setLists] = useState([
    {
      title: 'Membaca Al-Quran',
      subtitle: '3 ayat',
      duration: 200000,
    },
    {
      title: 'Shalat di Awal waktu',
      subtitle: 'Maksimal 30 menit',
      duration: 280000,
    },
    {
      title: 'Belajar React Native',
      subtitle: 'Git commit',
      duration: 288880,
    },
  ]);
  const shownList = lists.map((list, listIndex) =>
    <ListItem list={list} listIndex={listIndex} />
  );
  return (
    <View>
      <Timer selected={selected} lists={lists} />
      {shownList}
      <AddItem />
    </View>
  );
};

export default Main;

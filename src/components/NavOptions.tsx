import { FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import { DataInterface } from '../types';
import NavCard from './NavCard';

const NavOptions = () => {
  const data = [
    {
      id: '1',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '2',
      title: 'Order Food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen',
    },
  ];

  const renderOptions: ListRenderItem<DataInterface> = ({ item }) => (
    <NavCard item={item} />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderOptions}
      numColumns={2}
      automaticallyAdjustKeyboardInsets={true}
    />
  );
};

export default NavOptions;

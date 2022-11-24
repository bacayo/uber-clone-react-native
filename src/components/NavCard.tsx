import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

type Props = {
  item: {
    title: string;
    image: string;
  };
};

const NavCard = ({ item }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.primary }]}>
      <View>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
      <Icon
        name="arrow-with-circle-right"
        size={32}
        color={colors.text}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    margin: 4,
    height: 250,
    width: 160,
    padding: 8,
    paddingLeft: 24,
    paddingBottom: 32,
    paddingTop: 16,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  icon: {
    marginTop: 4,
    padding: 4,
  },
});

export default NavCard;

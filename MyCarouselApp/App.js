import React from 'react';
import { View, Text, Image, FlatList, ScrollView, StyleSheet, Dimensions, Button } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// Dummy data for the carousel and images
const images = [
  { id: '1', uri: require('./assets/Carousel1.png') },
  { id: '2', uri: require('./assets/Carousel2.png') },
  { id: '3', uri: require('./assets/Carousel3.png') },
];

export default function App() {
  const renderCarouselItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.uri} style={styles.carouselImage} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Semaine 1 : Synthèse</Text>
      <Text style={styles.subTitle}>Vos succès</Text>

      {/* Carousel */}
      <FlatList
        data={images}
        renderItem={renderCarouselItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.carousel}
      />

      <Text style={styles.subTitle}>Vue d'ensemble</Text>

      {/* Row of Images */}
      <View style={styles.imageRow}>
        <Image source={require('./assets/imageVDE1.png')} style={styles.rowImage} />
        <Image source={require('./assets/imageVDE2.png')} style={styles.rowImage} />
        <Image source={require('./assets/imageVDE3.png')} style={styles.rowImage} />
        <Image source={require('./assets/imageVDE4.png')} style={styles.rowImage} />
      </View>

      <Text style={styles.subTitle}>Vos prise cette semaine</Text>

      {/* Single Image */}
      <Image source={require('./assets/imagegraph.png')} style={styles.singleImage} />

      {/* Text Section */}
      <Text style={styles.textSection}>
      Comme pour beaucoup de personnes, le week-end semble être un moment de la semaine plus compliqué pour prendre vos traitements. Voici quelques conseils :
      </Text>
      <Text style={styles.textSection}>
      N’hésitez pas à modifier vos rappels pour coller à vos habitudes du week-end. Par exemple pour un réveil plus tardif.
      </Text>
      <Text style={styles.textSection}>
      Pensez à avoir votre Respiventix près de vous aux abords de votre horaire de prise. Placez-le dans la pièce où vous avez l’habitude d’être aux horaires de prises.
      </Text>

      <Text style={styles.subTitle}>Vos prochaines étapes</Text>

      {/* Another Row of Images */}
      <View style={styles.imageRow}>
        <Image source={require('./assets/imageNS1.png')} style={styles.rowImage} />
        <Image source={require('./assets/imageNS2.png')} style={styles.rowImage} />
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button title="Click Me" onPress={() => alert('Button Pressed')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#333',
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  carousel: {
    marginBottom: 20,
  },
  itemContainer: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '80%',
    height: screenWidth * 0.8,
    resizeMode: 'contain',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  rowImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  singleImage: {
    width: screenWidth - 40,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  textSection: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 20,
    textAlign: 'left',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});

import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  
  function headerButtonPressHandler(){
    console.log('Preaaed!');
  }
  
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: () =>{
            return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
        }
    });
  }, [navigation,headerButtonPressHandler]);
  
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.listOuterContainer}>
        <Image style={styles.images} source={{ uri: selectedMeals.imageUrl }} />
        <Text style={styles.title}>{selectedMeals.title}</Text>
        <MealDetails
          duration={selectedMeals.duration}
          complexity={selectedMeals.complexity}
          affordability={selectedMeals.affordability}
          textStyle={styles.detailText}
        />
        <View>
          <View style={styles.listContainer}>
            <Subtitle>Ingredient</Subtitle>
            <List data={selectedMeals.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeals.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
  images: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import recipeImages from "./recipeImages.js";
import chickenList from "./chicken.json";
import beefList from "./beef.json";
import porkList from "./pork.json";
import seafoodList from "./seafood.json";
import vegetableList from "./vegetable.json";

//WELCOME PAGE
function WelcomeScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace("Home");
  }, 3000);
  return (
    <ImageBackground
      style={styles.background}
      source={require("./app/assets/woodboard.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("./app/assets/logo.png")} />
        <Text style={styles.tagline}>Your Pinoy Cooking Guide!</Text>
        <View style={{ top: "25%" }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </View>
    </ImageBackground>
  );
}

const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

//HOME | CATEGORIES
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <StatusBar backgroundColor="black" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Chicken")}>
          <View
            style={{
              flexDirection: "row",
              width: DeviceWidth,
              height: DeviceWidth * 0.5,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri:
                  "https://www.simplyrecipes.com/wp-content/uploads/2019/03/HT-Make-Roast-Chicken-LEAD-5v2.jpg",
              }}
              style={{
                width: DeviceWidth * 0.5,
                height: DeviceWidth * 0.3,
                resizeMode: "contain",
                borderRadius: 0,
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 35,
                fontWeight: "bold",
                left: 5,
              }}
            >
              Chicken
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Beef")}>
          <View
            style={{
              flexDirection: "row",
              width: DeviceWidth,
              height: DeviceWidth * 0.5,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri:
                  "https://www.thespruceeats.com/thmb/36JNkbU3O0GDp4THFQmcbpQ32ck=/4048x2696/filters:fill(auto,1)/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg",
              }}
              style={{
                width: DeviceWidth * 0.5,
                height: DeviceWidth * 0.3,
                resizeMode: "contain",
                borderRadius: 0,
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 35,
                fontWeight: "bold",
                left: 5,
              }}
            >
              Beef
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Pork")}>
          <View
            style={{
              flexDirection: "row",
              width: DeviceWidth,
              height: DeviceWidth * 0.5,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri:
                  "https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418779-pork-chops-delish.jpg?resize=480:*",
              }}
              style={{
                width: DeviceWidth * 0.5,
                height: DeviceWidth * 0.3,
                resizeMode: "contain",
                borderRadius: 0,
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 35,
                fontWeight: "bold",
                left: 5,
              }}
            >
              Pork
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Seafood")}>
          <View
            style={{
              flexDirection: "row",
              width: DeviceWidth,
              height: DeviceWidth * 0.5,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri:
                  "https://www.simplyrecipes.com/wp-content/uploads/2018/07/Seafood-Paella-HORIZONTAL.jpg",
              }}
              style={{
                width: DeviceWidth * 0.5,
                height: DeviceWidth * 0.3,
                resizeMode: "contain",
                borderRadius: 0,
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 35,
                fontWeight: "bold",
                left: 5,
              }}
            >
              Seafood
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Vegetables")}>
          <View
            style={{
              flexDirection: "row",
              width: DeviceWidth,
              height: DeviceWidth * 0.5,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri:
                  "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg",
              }}
              style={{
                width: DeviceWidth * 0.5,
                height: DeviceWidth * 0.3,
                resizeMode: "contain",
                borderRadius: 0,
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 35,
                fontWeight: "bold",
                left: 5,
              }}
            >
              Vegetables
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
//BODY | RECIPES
function ChickenScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar backgroundColor="black" />
      <FlatList
        ItemSeparatorComponent={Separator}
        data={chickenList}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Description", { item })}
            >
              <View>
                <Image
                  source={recipeImages[item.image]}
                  style={{
                    width: 350,
                    height: 200,
                    borderColor: "black",
                    borderWidth: 1,
                    alignSelf: "center",
                    resizeMode: "cover",
                  }}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    top: 1,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

function BeefScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar backgroundColor="black" />

      <FlatList
        ItemSeparatorComponent={Separator}
        data={beefList}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Description", { item })}
            >
              <View>
                <Image
                  source={recipeImages[item.image]}
                  style={{
                    width: 350,
                    height: 200,
                    borderColor: "black",
                    borderWidth: 1,
                    alignSelf: "center",
                    resizeMode: "cover",
                  }}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    top: 1,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

function PorkScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar backgroundColor="black" />

      <FlatList
        ItemSeparatorComponent={Separator}
        data={porkList}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Description", { item })}
            >
              <View>
                <Image
                  source={recipeImages[item.image]}
                  style={{
                    width: 350,
                    height: 200,
                    borderColor: "black",
                    borderWidth: 1,
                    alignSelf: "center",
                    resizeMode: "cover",
                  }}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    top: 1,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

function SeafoodScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar backgroundColor="black" />

      <FlatList
        ItemSeparatorComponent={Separator}
        data={seafoodList}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Description", { item })}
            >
              <View>
                <Image
                  source={recipeImages[item.image]}
                  style={{
                    width: 350,
                    height: 200,
                    borderColor: "black",
                    borderWidth: 1,
                    alignSelf: "center",
                    resizeMode: "cover",
                  }}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    top: 1,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

function VegetablesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar backgroundColor="black" />

      <FlatList
        ItemSeparatorComponent={Separator}
        data={vegetableList}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Description", { item })}
            >
              <View>
                <Image
                  source={recipeImages[item.image]}
                  style={{
                    width: 350,
                    height: 200,
                    borderColor: "black",
                    borderWidth: 1,
                    alignSelf: "center",
                    resizeMode: "cover",
                  }}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    top: 1,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

//BODY | RECIPE DESCRIPTION
function DescriptionScreen({ navigation, route }) {
  const { item } = route.params;
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image
          source={recipeImages[item.image]}
          style={{
            width: 250,
            height: 200,
            borderColor: "black",
            borderWidth: 1,
            alignSelf: "center",
            resizeMode: "cover",
            top: "1%",
          }}
        />
        <Text
          numberOfLines={2}
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 10,
          }}
        >
          {item.name}
        </Text>
        <Text>{item.description}</Text>
        <Text>{item.spacing4}</Text>
        <Text>Course: {item.course}</Text>
        <Text>Cuisine: {item.cuisine}</Text>
        <Text>Prep Time: {item.prepTime}</Text>
        <Text>Cook Time: {item.cookTime}</Text>
        <Text>Total Time: {item.totalTime}</Text>
        <Text>Servings: {item.servings} people</Text>
        <Text>Author: {item.author}</Text>
        <Text>{item.spacing1}</Text>
        <Text>Ingredients: {item.ingredients}</Text>
        <Text> {item.step1}</Text>
        <Text> {item.step2}</Text>
        <Text> {item.step3}</Text>
        <Text> {item.step4}</Text>
        <Text> {item.step5}</Text>
        <Text> {item.step6}</Text>
        <Text> {item.step7}</Text>
        <Text> {item.step8}</Text>
        <Text> {item.step9}</Text>
        <Text> {item.step10}</Text>
        <Text> {item.step11}</Text>
        <Text> {item.step12}</Text>
        <Text> {item.step13}</Text>
        <Text> {item.step14}</Text>
        <Text> {item.step15}</Text>
        <Text> {item.step16}</Text>
        <Text> {item.spacing2}</Text>
        <Text>Instructions: {item.instructions}</Text>
        <Text>{item.f1}</Text>
        <Text>{item.f2}</Text>
        <Text>{item.f3}</Text>
        <Text>{item.f4}</Text>
        <Text>{item.f5}</Text>
        <Text>{item.f6}</Text>
        <Text>{item.f7}</Text>
        <Text>{item.f8}</Text>
        <Text>{item.f9}</Text>
        <Text>{item.f10}</Text>
        <Text>{item.f11}</Text>
        <Text>{item.spacing3}</Text>
        <Text>Visit Procedure: {item.visitProcedure}</Text>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

//STYLES
const Separator = () => (
  <View
    style={{
      marginVertical: 12,
      borderBottomColor: "#737373",
      borderBottomWidth: 12,
    }}
  />
);

const styles = StyleSheet.create({
  //WELCOMEPAGE
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 400 / 2,
  },
  tagline: {
    fontSize: 15,
    color: "white",
    fontStyle: "italic",
    textShadowRadius: 10,
    top: "12%",
  },
  logoContainer: {
    position: "absolute",
    top: "30%",
    alignItems: "center",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Categories",
            headerStyle: {
              backgroundColor: "orangered",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 28,
            },
          }}
        />
        <Stack.Screen
          name="Chicken"
          component={ChickenScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Beef"
          component={BeefScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Pork"
          component={PorkScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Seafood"
          component={SeafoodScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Vegetables"
          component={VegetablesScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={({ route }) => ({
            title: route.params.item.name,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

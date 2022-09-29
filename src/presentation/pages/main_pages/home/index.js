import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Geojson } from "react-native-maps";

const { height, width } = Dimensions.get("window");
const HomePageIndex = () => {
  const [allPlaces, setAllPlaces] = useState([]);

  const getGeoJson = () => {
    fetch(
      "https://raw.githubusercontent.com/geohacker/namma-metro/master/metro-lines-stations.geojson",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setAllPlaces(response);
      })
      .catch((err) => {
        console.log(response, "err");
      });
  };

  useEffect(() => {
    getGeoJson();
  }, []);

  useEffect(() => {
    console.log(allPlaces.length, "allPlaces", allPlaces);
  }, [allPlaces]);
  return (
    <View style={{}}>
      {allPlaces ? (
        <MapView
          style={{
            height: height * 0.85,
            width: width * 0.85,
          }}
        >
          <Geojson
            geojson={allPlaces}
            strokeColor="red"
            fillColor="green"
            // strokeWidth={2}
            // style={{
            //   height,
            //   width: width * 0.85,
            // }}
          />
        </MapView>
      ) : (
        <View
          style={{
            backgroundColor: "red",
          }}
        >
          <Text>Hello</Text>
        </View>
      )}
    </View>
  );
};

export default HomePageIndex;

const styles = StyleSheet.create({});

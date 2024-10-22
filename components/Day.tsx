import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { dayWidth } from "@/constants/Days";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const Day = ({ name, date, index, scrollOffset }) => {
  const aStyle = useAnimatedStyle(() => {
    const activeIndex = scrollOffset.value / dayWidth;
    const scale = interpolate(
      activeIndex,
      [index - 4, index - 3, index - 2, index - 1, index],
      [0, 0.4, 0.7, 1, 1.5]
    );
    const opacity = interpolate(
      activeIndex,
      [index - 4, index - 3, index - 2, index - 1, index],
      [0, 0.13, 0.15, 1, 0]
    );
    const translateX = interpolate(
      activeIndex,
      [index - 4, index - 3, index - 2, index - 1, index],
      [-150, -100, -30, 0, -30]
    );
    return {
      transform: [{ translateX }, { scale }],
      opacity,
    };
  }, []);
  return (
    <Animated.View style={[styles.box, aStyle]}>
      <Text style={{ fontSize: 45, color: "#763626" }}>{name}</Text>
      <Text style={{ fontSize: 70, fontWeight: "bold", color: "#763626" }}>
        {date}
      </Text>
    </Animated.View>
  );
};

export default Day;

const styles = StyleSheet.create({
  box: {
    width: dayWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});

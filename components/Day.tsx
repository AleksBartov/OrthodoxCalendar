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
      [index - 2, index - 1, index, index + 1, index + 2],
      [0.8, 1, 0.85, 0.7, 0.55]
    );
    const opacity = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1, index + 2],
      [0.3, 1, 0.3, 0.2, 0]
    );
    return {
      transform: [{ scale }],
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

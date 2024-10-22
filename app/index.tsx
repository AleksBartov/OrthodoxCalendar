import { View, useWindowDimensions, ScrollView } from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import Day from "../components/Day";
import { dayHeight, Days, dayWidth } from "../constants/Days";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

const index = () => {
  const animatedRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(animatedRef);
  const { width, height } = useWindowDimensions();
  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Rect width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#FBEAEB", "#2F3C7E"]}
          />
        </Rect>
      </Canvas>
      <View
        style={{
          height: dayHeight,
          position: "absolute",
          top: 150,
          left: -100,
        }}
      >
        <Animated.ScrollView
          ref={animatedRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={dayWidth}
          disableIntervalMomentum
          scrollEventThrottle={16}
        >
          {Days.map((d, i) => {
            return (
              <Day
                key={i}
                name={d.name}
                date={d.date}
                index={i}
                scrollOffset={scrollOffset}
              />
            );
          })}
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default index;

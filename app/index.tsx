import { View, useWindowDimensions, ScrollView } from "react-native";
import React from "react";
import {
  Canvas,
  Image,
  LinearGradient,
  Rect,
  useImage,
  vec,
} from "@shopify/react-native-skia";
import Day from "../components/Day";
import { dayHeight, Days, dayWidth } from "../constants/Days";
import Animated, {
  FadeInDown,
  FadeOut,
  Layout,
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";

const index = () => {
  const animatedRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(animatedRef);
  const { width, height } = useWindowDimensions();

  const prepSergyImg = useImage(require("../assets/images/prepSergy.jpg"));
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
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: height * 0.65,
        }}
        entering={FadeInDown.delay(500).duration(600)}
        exiting={FadeOut}
      >
        <Canvas style={{ flex: 1 }}>
          <Image
            image={prepSergyImg}
            fit="contain"
            x={0}
            y={0}
            width={130}
            height={130}
          />
        </Canvas>
      </Animated.View>
    </>
  );
};

export default index;

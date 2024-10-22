import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import {
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const Background = ({ scrollOffset }) => {
  const { width, height } = useWindowDimensions();
  const startColor = useSharedValue("#FBEAEB");
  const endColor = useSharedValue(5656);
  useAnimatedReaction(
    () => scrollOffset.value,
    (v) => {
      endColor.value = v;
      console.log(v);
    }
  );
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={[startColor.value, `#ee${endColor.value}`]}
        />
      </Rect>
    </Canvas>
  );
};

export default Background;

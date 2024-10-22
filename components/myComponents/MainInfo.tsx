import { useWindowDimensions } from "react-native";
import React from "react";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { Canvas, Image, useImage } from "@shopify/react-native-skia";

const MainInfo = () => {
  const { height } = useWindowDimensions();

  const prepSergyImg = useImage(require("../../assets/images/prepSergy.jpg"));
  return (
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
  );
};

export default MainInfo;

import React from "react";
import Background from "@/components/myComponents/Background";
import MainInfo from "@/components/myComponents/MainInfo";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";
import { View } from "react-native";
import { dayHeight, Days, dayWidth } from "@/constants/Days";
import Day from "@/components/Day";

const index = () => {
  const animatedRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(animatedRef);
  return (
    <>
      <Background scrollOffset={scrollOffset} />
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
      <MainInfo />
    </>
  );
};

export default index;

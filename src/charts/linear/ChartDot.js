import React, { useContext } from 'react';
import Animated from 'react-native-reanimated';
import pxToDp from '../../../../../../components/pxToDp';

import ChartContext from '../../helpers/ChartContext';
import withReanimatedFallback from '../../helpers/withReanimatedFallback';

function ChartDot({ style, size = 10, ...props }) {
  const { dotStyle } = useContext(ChartContext);

  return (
    <Animated.View
      {...props}
      pointerEvents="none"
      style={[
        dotStyle,
        {
          borderRadius: size / 2,
          height: size,
          left: -size / 2,
          position: 'absolute',
          top: -size / 2,
          width: size,
        },
        style,
      ]}
    >
      <Animated.View
        style={
          {
            height: 999,
            position: 'absolute',
            top: -size / 2,
            right: size / 2,
            borderColor:'rgba(200, 200, 200, 0.8)',
            borderStyle:'dashed',
            borderRadius:1,
            borderWidth:pxToDp(0.6),
          }
        }
      />

    </Animated.View>
  );
}

export default withReanimatedFallback(ChartDot);

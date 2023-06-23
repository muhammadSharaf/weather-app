import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgWave = ({width, height, color, y0, y1, pivot}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{position: 'absolute', bottom: 0}}>
      <Path
        fill={color}
        fill-opacity="1"
        d={`M0 ${height}L0 ${height - y0}Q${width / 2} ${pivot} ${width} ${
          height - y1
        }L${width} ${height}Z`}></Path>
    </Svg>
  );
};

export default SvgWave;

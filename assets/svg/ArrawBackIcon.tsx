import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISVGProps } from '@/src/types/ISVGProps';

export default function ArrowBackIcon({
  width = 24,
  height = 24,
  fill = '#007F6D',
  ...props
}: ISVGProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M16 22L6 12 16 2l1.775 1.775L9.55 12l8.225 8.225L16 22z"
        fill={fill}
      />
    </Svg>
  );
}

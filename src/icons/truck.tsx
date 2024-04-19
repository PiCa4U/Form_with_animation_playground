import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const Truck = () => {
  return (
    <Svg width={150} height={150} viewBox="0 0 48 48" fill="none">
      <G clipPath="url(#clip0_416_13290)">
        <Path
          d="M33 15h7.987a1.481 1.481 0 011.388.938L45 22.5M3 27h30M35.25 40.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM12.75 40.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM30.75 36h-13.5"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.25 36H4.5A1.5 1.5 0 013 34.5v-21A1.5 1.5 0 014.5 12H33v20.1M33 22.5h12v12a1.5 1.5 0 01-1.5 1.5h-3.75"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_416_13290">
          <Path fill="#fff" d="M0 0H48V48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

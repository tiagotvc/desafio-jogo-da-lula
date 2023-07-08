import { ISvgComponent } from "interfaces/SvgComponent/svgComponent.interface";
import { Squid } from "./Squid/squid";

const SvgComponent: React.FC<ISvgComponent> = ({ variant, width, height }) => {
    console.log(variant)
  return <Squid width={width} height={height} />;
};

export default SvgComponent;

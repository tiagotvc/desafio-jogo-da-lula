import { ISvgComponent } from "interfaces/SvgComponent/svgComponent.interface";
import { Squid } from "./Squid/squid";
import { Soldier } from "./Soldier/squid";

const SvgComponent: React.FC<ISvgComponent> = ({ variant, width, height }) => {
  if (variant === "soldier") return <Soldier width={width} height={height} />;
  return <Squid width={width} height={height} />;
};

export default SvgComponent;

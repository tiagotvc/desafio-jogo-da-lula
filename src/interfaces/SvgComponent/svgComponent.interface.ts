import { TSvgVariant } from "types/SvgComponent/svgComponent.types";

export interface ISvg {
  width: number;
  height: number;
}

export interface ISvgComponent extends ISvg {
  variant: TSvgVariant;
}

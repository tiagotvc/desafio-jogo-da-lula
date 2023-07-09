import { ICSS } from "interfaces/Css/css.interface";
import { TypographVariants } from "types/Typography/typography.types";

export interface ITypography extends ICSS {
  variant: TypographVariants;
}

import { SVGProps } from "react";

export type TIcon = SVGProps<SVGSVGElement>;

export type TIconArrow = {
  direction?: EArrowDirection;
} & TIcon;

export enum EArrowDirection {
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left",
}

export type TIconStyle = {
  iconStyle?: "default" | "solid" | "circle";
};

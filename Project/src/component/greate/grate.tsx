import React from "react";
import { greadProps } from "./grade.types";

export default function Grate(props: greadProps) {
  return <div>Grade{props.name ? props.name : "Hello"}</div>;
}

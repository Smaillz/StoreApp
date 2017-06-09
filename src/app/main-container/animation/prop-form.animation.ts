import {state, trigger, style, animate, transition, keyframes} from "@angular/animations";
import {queryDef} from "@angular/core/src/view";

let timeAnimation = ".5s";

export function showFormField() {
  return trigger("isVisabilityForm", [
    state("hidden", style({
      transform: "translateX( calc(100% - 50px)",
      width: "50px"
    })),
    state("shown", style({
      transform: "translateX(0)",
      width: "400px"
    })),
    transition("hidden => shown", animate(timeAnimation)),
    transition("shown => hidden", animate(timeAnimation)),
  ]);
}

export function rotateArrow() {
  return trigger("change-rotate", [
    state("hidden", style({
      transform: "rotate(0)",
    })),
    state("shown", style({
      transform: "rotate(-180deg)",
    })),
    transition("hidden => shown", animate(timeAnimation)),
    transition("shown => hidden", animate(timeAnimation)),
  ]);
}


// export function dropProp() {
//   return trigger("dropPropety", [
//     transition("void => *", animate(600, keyframes([
//       style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
//       style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
//       style({opacity: 1, transform: 'translateY(0)', offset: 1}),
//     ]))),
//   ]);
// }

let timer = 0;

export function dropProp() {
  return  trigger("dropPropety", [
    state('in', style({transform: 'translateX(0)'})),
    transition("void => *", animate("0.6s", keyframes([
      style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
      style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1}),
    ]))),
  ]);
}

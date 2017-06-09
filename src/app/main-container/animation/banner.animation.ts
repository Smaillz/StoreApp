import {trigger, transition, style, animate} from "@angular/animations";

export function loadBanner() {
  return trigger('hostedLoad', [
    transition("void => *", [
      style({
        transform: "translateX(-100%)",
        height: "0"
      }),
      animate(700)
    ]),
  ]);
}

import quit from "./icons/actions/quit.svg";
import draw from "./icons/results/draw.svg";
import loss from "./icons/results/loss.svg";
import win from "./icons/results/win.svg";
import streak from "./icons/status/streak.svg";
import catCrying from "./mascots/cat/crying.svg";
import catIdle from "./mascots/cat/idle.svg";
import catPeeking from "./mascots/cat/peeking.svg";
import dogCrying from "./mascots/dog/crying.svg";
import dogIdle from "./mascots/dog/idle.svg";
import dogPeeking from "./mascots/dog/peeking.svg";

export const assets = {
  mascots: {
    cat: {
      idle: catIdle,
      crying: catCrying,
      peeking: catPeeking,
    },
    dog: {
      idle: dogIdle,
      crying: dogCrying,
      peeking: dogPeeking,
    },
  },
  icons: {
    actions: {
      quit,
    },
    results: {
      win,
      loss,
      draw,
    },
    status: {
      streak,
    },
  },
} as const;

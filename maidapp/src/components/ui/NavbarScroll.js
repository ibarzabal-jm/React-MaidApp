import React from "react";
import { useScrollTrigger } from "@material-ui/core";

export default function ScrollToColor02(props) {
  const {
    threshold,
    bgColorBefore,
    bgColorAfter,
    textColorBefore,
    textColorAfter,
    fadeIn,
    fadeOut,
    paddingBefore,
    paddingAfter,
    children,
    ...other
  } = {
    threshold: 0,
    bgColorBefore: "transparent",
    bgColorAfter: "#7FC6DA",
    textColorBefore: "white",
    textColorAfter: "white",
    fadeIn: "0.3s ease-in",
    fadeOut: "0.3s ease-out",
    paddingBefore: "0.8rem",
    paddingAfter: ".2rem",
    ...props
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(children, {
    style: {
      boxShadow: trigger ? "5px 10px 18px #888888" : "none",
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut,
    },
    ...other
  });
}

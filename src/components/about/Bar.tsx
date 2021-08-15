import React from "react";
import { useInView } from "react-intersection-observer";
import Utils from "../Utils";

function Bar(props: {skill: { tool: string, level: string },index:number}) {

  const [refBar, inViewBar, entryBar] = useInView({
    triggerOnce: true
  });
  const [refBarProgress, _inViewBarProgress, entryBarProgress] = useInView({
    triggerOnce: true
  });
  const [refBarProgressLine, _inViewBarProgressLine, entryBarProgressLine] = useInView({
    triggerOnce: true
  });

  return (
    <div className="bar" 
    >
      <div className="info">
        <span  className="text-s"     
            ref={refBar}
            animation-name="showText"
            animation-duration="1000"
            animation-delay="500"
            style={Utils.animate(inViewBar,entryBar)}
        >{props.skill.tool}</span>
      </div>
      <div className="progress-line "
      ref={refBarProgress}
      animation-name="animate"
      animation-duration="500"
      animation-delay="1000"
      style={Utils.animate(inViewBar,entryBarProgress)}
      >
        <span
        ref={refBarProgressLine}
        animation-name="animate"
        animation-duration="500"
        animation-delay="600"
        style={{...{width: props.skill.level },...Utils.animate(inViewBar,entryBarProgressLine)}}
        ></span>
      </div>
    </div>
  );
}

export default Bar;

import { useEffect, useRef } from "react";

import rectangle1 from "./assets/rectangle1.svg";
import rectangle2 from "./assets/rectangle2.svg";
import rectangle3 from "./assets/rectangle3.svg";
import rectangle4 from "./assets/rectangle4.svg";
import rectangle5 from "./assets/rectangle5.svg";

const rectangles = [
  rectangle1,
  rectangle2,
  rectangle3,
  rectangle4,
  rectangle5,
];

export function ContactTest() {
  return (
    <section className="contact-test">
      <div className="rectangle-track">
        {Array.from({ length: 40 }).map((_, groupIndex) => {
          const pattern =
            groupIndex % 2 === 0
              ? rectangles
              : [...rectangles].reverse();

          return (
            <div className="rectangle-group" key={groupIndex}>
              {pattern.map((rectangle, index) => (
                <img
                  key={index}
                  src={rectangle}
                  alt=""
                  className="flow-rectangle"
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
import "./Sponors.css";
import { useEffect } from "react";

const Sponors = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
    addAnimation();
  }, []);

  return (
    <div>
      <h1>Sponsors</h1>
      <div className="sp">
        <div className="scroller" data-direction="right" data-speed="fast">
          <div className="scroller__inner">
            <img src="https://i.pravatar.cc/150?img=1" alt="" />
            <img src="https://i.pravatar.cc/150?img=2" alt="" />
            <img src="https://i.pravatar.cc/150?img=3" alt="" />
            <img src="https://i.pravatar.cc/150?img=4" alt="" />
            <img src="https://i.pravatar.cc/150?img=5" alt="" />
            <img src="https://i.pravatar.cc/150?img=6" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponors;

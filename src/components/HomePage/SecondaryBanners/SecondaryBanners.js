import React from "react";
import "./SecondaryBanners.css";
/* I was going to make the Secondary Banners in a json form then extract the info using "map"
 to the main component, However, it doesn't work since images are background images. */

const SecondaryBanners = () => {
  return (
    <div className="secondaryBanner">
      <div className="firstSeondaryBanner">
        <h2>Nice Little Gifts</h2>
        <p>For loved ones</p>
        <button>View more &#8594;</button>
      </div>
      <div className="secondSeondaryBanner">
        <h2>Plants</h2>
        <p>For home comfort</p>
        <button>View more &#8594;</button>
      </div>
    </div>
  );
};

export default SecondaryBanners;

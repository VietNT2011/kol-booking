import React from 'react'
import './BrandSlider.css'
const BrandSlider = () => {
  const logoFiles = import.meta.glob(
    "../../assets/brandlogo/*.png",
    { eager: true }
  );

  const brandLogos = Object.values(logoFiles).map((file) => file.default);

  return (
    <div className="brandslider">
      <div className="brandslider__track">
        {[...brandLogos, ...brandLogos].map((logo, i) => (
          <div className="track__item" key={i}>
            <img src={logo} alt="brand" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandSlider
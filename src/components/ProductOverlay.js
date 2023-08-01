// import CloseCross from "../img/icons/close-black.png";
import React, { useState, useRef, useCallback } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import "../css/components/productOverlay.css";

const ProductOverlay = ({ imgOverlay, open, setOpen }) => {
  const overlayRef = useRef(null);
  const handleCloseOverlay = (event) => {
    if (event.target === overlayRef.current) {
      setOpen(false);
    }
  };

  const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      className={`product__overlay-container ${open ? "" : "product__none"} `}
      onClick={handleCloseOverlay}
    >
      <div className="product__overlay-img-container">
        <img className="product__overlay-img" src={imgOverlay} alt="img" />
        {/* <QuickPinchZoom onUpdate={onUpdate}>
          <img ref={imgRef} src={imgOverlay} />
        </QuickPinchZoom> */}
      </div>
    </div>
  );
};
export default ProductOverlay;

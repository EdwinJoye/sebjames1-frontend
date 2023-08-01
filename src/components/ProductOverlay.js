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
      className={`productOverlay-container ${
        open ? "" : "productOverlay__none"
      } `}
      onClick={handleCloseOverlay}
    >
      <div className="productOverlay__img-container">
        <QuickPinchZoom onUpdate={onUpdate}>
          <img className="productOverlay__img" ref={imgRef} src={imgOverlay} />
        </QuickPinchZoom>
      </div>
    </div>
  );
};
export default ProductOverlay;

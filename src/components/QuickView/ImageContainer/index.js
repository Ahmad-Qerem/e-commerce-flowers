import React from "react";
import styles from "./styles.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageContainer = ({ photo }) => {
  return (
    <div className={styles.ImageContainer}>
      <TransformWrapper
        initialScale={1}
        initialPositionX={10}
        initialPositionY={10}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment >
            <TransformComponent>
              <img className={styles.Photo} src={photo} />
            </TransformComponent>

            <div className={styles.ZoomButtons}>
              <button className={styles.ZoomButton} onClick={() => zoomIn()}>
                Zoom In
              </button>
              <button className={styles.ZoomButton} onClick={() => zoomOut()}>
                Zoom out
              </button>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageContainer;

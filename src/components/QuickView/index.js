import styles from "./styles.module.css";
import React from "react";
import Count from "./Count";
import CircularColor from "./CircularColor";
import ImageContainer from "./ImageContainer";
import AddToCardButton from "./AddToCardButton";
import Price from "./Price";
import { AiOutlineClose } from "react-icons/ai";
import DetailsComponent from "./DetailsComponent";
const QuickView = ({
  setOpenModal,
  photo,
  price,
  category,
  instructions,
  name,
  oldPrice,
}) => {
  return (
    <>
      <div className={styles.ModalBackground}>
        <div className={styles.ModalContainer}>
          <div className={styles.HeaderContainer}>
            <p className={styles.HeaderTitle}>{name}</p>
            <button
              className={styles.CloseBtn}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              {" "}
              <AiOutlineClose />
            </button>
          </div>

          <div className={styles.ModalBody}>
            <div className={styles.ImageContainer}>
              <ImageContainer photo={photo} />
            </div>
            <div className={styles.RightComponents}>
              <Price currentPrice={price} oldPrice={oldPrice} />
              <Count />
              <CircularColor />
              <AddToCardButton />
              <DetailsComponent instructions={instructions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuickView;

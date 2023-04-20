import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Galleryimages = ({ images, open, setOpen }) => {
  const updateimages = images.map((item) => ({
    src : item
  }));

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={updateimages}
      />
    </>
  );
};

export default Galleryimages;

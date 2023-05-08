import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

const Galleryimages = ({ images, open, setOpen }) => {
  const updateimages = images.map((item) => ({
    src: item,
  }));

  return (
    <>
      <Lightbox
        plugins={[Fullscreen]}
        open={open}
        close={() => setOpen(false)}
        slides={updateimages}
      />
    </>
  );
};

export default Galleryimages;

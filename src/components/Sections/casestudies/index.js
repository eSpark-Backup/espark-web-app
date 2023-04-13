import ImageGallery from "react-image-gallery";
import { projects } from "../../../helper/projects";
import styles from "./style.module.css";

function MyGallery({ images }) {
  const updateimages = [
    images?.map((items) => {
      return {
        original: items,
        thumbnail: items,
      };
    }),
  ];
  return (
    <div>
      <ImageGallery
        items={updateimages[0]}
        showThumbnails={false}
        showNav={true}
      />
    </div>
  );
}

export default MyGallery;

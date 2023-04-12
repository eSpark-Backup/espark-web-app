import ImageGallery from "react-image-gallery";
import { projects } from "../../../helper/projects";
import styles from "./style.module.css";

const images = [
  ...projects[0]?.childs?.map((items) => {
    return {
      original: items.image,
      thumbnail: items.image,
    };
  }),
];

function MyGallery() {
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}

export default MyGallery;

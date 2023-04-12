import ImageGallery from "react-image-gallery";
import { projects } from "../../../helper/projects";
import styles from "./style.module.css";

const images = [
  ...projects[0]?.childs?.map((items) => {
    return {
      original: items.image,
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    };
  }),
];

function MyGallery() {
  return (
    <div className={styles.MyGallery}>
      <ImageGallery items={images} />;
    </div>
  );
}

export default MyGallery;

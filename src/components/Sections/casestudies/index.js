import PhotoAlbum from "react-photo-album";
import styles from "./style.module.css";
import { projects } from "../../../helper/projects";

import aboutone from "../../../assets/images/projects/Andriod/Panayama App.jpg";

console.log(projects);

const photos = [
  ...(projects[0]?.childs?.map((items) => ({
    src: items.image,
    width: 800,
    height: 600,
  })) || []),
  { src: aboutone, width: 800, height: 600 },
  // Other photos here
];

// const photos = projects.reduce((allPhotos, project) => {
//   if (project.childs) {
//     const projectPhotos = project.childs.map((child) => ({
//       src: child.image,
//       width: 800,
//       height: 600,
//     }));
//     allPhotos.push(...projectPhotos);
//   }
//   return allPhotos;
// }, []);

export default function Gallery() {
  return (
    <div className={styles.Gallery}>
      <PhotoAlbum layout="columns" photos={photos} />
    </div>
  );
}

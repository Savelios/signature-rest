import { PictureList } from "../../components/lists/picture/picture-list";
import "./PicturePage.css";

type PicturePageProps = {
  onOpenModal: () => void;
};

const PicturePage: React.FC<PicturePageProps> = ({ onOpenModal }) => {
  return (
    <>
      <PictureList />
    </>
  );
};
export default PicturePage;

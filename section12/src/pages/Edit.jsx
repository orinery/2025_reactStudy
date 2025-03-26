import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return (
    <div>
      <p>{params.id}번 일기입니다.</p>
    </div>
  );
};

export default Edit;

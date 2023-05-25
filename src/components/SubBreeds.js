import React from "react";
import { useParams } from "react-router-dom";

const SubBreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>SubBreeds: {dogId}</div>;
};

export default SubBreeds;

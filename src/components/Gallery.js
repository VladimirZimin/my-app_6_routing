import React from "react";
import { useParams } from "react-router-dom";

const dogs = [
  { user: "🐶", id: 1 },
  { user: "🐕", id: 2 },
  { user: "🦮", id: 3 },
  { user: "🐕‍🦺", id: 4 },
  { user: "🐩", id: 5 },
  { user: "🐺", id: 6 },
];

export const Gallery = () => {
  const { dogId } = useParams();

  const getDogs = (dogId) =>
    dogs.find((dog) => Number(dog.id) === Number(dogId));

  const dog = getDogs(dogId);

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Image Gallery: {dog.user}</div>;
};

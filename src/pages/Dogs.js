import React, { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const dogs = [
  { user: "🐶", id: 1 },
  { user: "🐕", id: 2 },
  { user: "🦮", id: 3 },
  { user: "🐕‍🦺", id: 4 },
  { user: "🐩", id: 5 },
  { user: "🐺", id: 6 },
];

const Dogs = () => {
  // const [dogs, setDogs] = useState(["1", "2", "3", "4", "5", "6"]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get("dogId") ?? "";

  useEffect(() => {
    // http запрос, получаем список dogs
  }, []);

  const updateQueryString = (evt) => {
    const dogIdValue = evt.target.value;
    if (dogIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });
  };

  const visibleDogs = dogs.filter((dog) => {
    return String(dog.id).includes(dogId);
  });
  console.log("visibleDogs:", visibleDogs);

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      {visibleDogs.map((dog) => {
        return (
          <Link key={dog.id} to={`${dog.id}`} state={{ from: location }}>
            <h1>{dog.user}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Dogs;

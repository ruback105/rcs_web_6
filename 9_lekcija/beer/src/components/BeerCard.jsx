import { useEffect, useState } from "react";
import { Card } from "./Card";

export function BeerCard({ id }) {
  const [beer, setBeer] = useState();

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`).then((response) => {
      response.json().then((data) => {
        const singleBeer = data[0];
        setBeer(singleBeer);
      });
    });
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return <Card beer={beer} />;
}

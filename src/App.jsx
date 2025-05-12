/**
 * React TV is an web streaming platform that allows users to browse through the episodes of a variety of different shows.
 */

import { useState } from "react";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={tvShows}
          setSelectedShow={(show) => {
            setSelectedShow(show);
            setSelectedEpisode(null);
          }}
        />
      </header>
      <main>
        <ShowDetails
          show={selectedShow}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </main>
    </>
  );
}

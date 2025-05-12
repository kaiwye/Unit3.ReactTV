import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({
  show,
  selectedEpisode,
  setSelectedEpisode,
}) {
  if (!show) {
    return <div>Please select a show to learn more!</div>;
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}

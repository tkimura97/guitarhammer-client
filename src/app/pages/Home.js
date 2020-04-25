import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chord from "@tombatossals/react-chords/lib/Chord";

const MyChord = () => {
  const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false,
  };
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"],
    },
  };
  const lite = false; // defaults to false if omitted
  return <Chord chord={chord} instrument={instrument} lite={lite} />;
};

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/table">
          <li>Table</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <MyChord />
      </div>
    );
  }
}

export default Home;

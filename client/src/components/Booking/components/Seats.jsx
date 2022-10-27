import React, { useEffect, useState } from "react";
import "../../../assets/css/seats.css";
import clsx from "clsx";
const movies = [
  {
    name: "Vadivasal",
    price: 120,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Valimai",
    price: 150,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Beast",
    price: 200,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "Doctor",
    price: 100,
    occupied: [10, 12, 50, 33, 28, 47],
  },
  {
    name: "Ponniyin Selvan-The Beginning",
    price: 200,
    occupied: [7, 25, 4, 13, 20, 31],
  },
  {
    name: "Vikram",
    price: 180,
    occupied: [3, 5, 40, 3, 20, 21],
  },
];

const seats = [
  {
    row: "E",
    seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    totalPlaces: 15,
  },
  {
    row: "D",
    seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    totalPlaces: 15,
  },
  {
    row: "C",
    seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    totalPlaces: 15,
  },
  {
    row: "B",
    seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    totalPlaces: 15,
  },
  {
    row: "A",
    seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    totalPlaces: 15,
  },
];

function shoot() {
  alert(PaymentRequest);
}
const Seats = () => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  return (
    <>
      <div className="mainSeat">
        <div className="AppSeat">
          <Movies
            movie={selectedMovie}
            onChange={(movie) => {
              setSelectedSeats([]);
              setSelectedMovie(movie);
            }}
          />
          <ShowCase />
          <Cinema
            movie={selectedMovie}
            selectedSeats={selectedSeats}
            onSelectedSeatsChange={(selectedSeats) =>
              setSelectedSeats(selectedSeats)
            }
          />

          <p className="infoSeat">
            Total seats alloted for you is{" "}
            <span className="count">{selectedSeats.length}</span> at a price of{" "}
            <span className="total">
              {"Rs." + selectedSeats.length * selectedMovie.price}
            </span>
            <p>
              <button className="bg" onClick={shoot}>
                <b>Book Now</b>
              </button>
            </p>
            <h4>
              HAPPY BIN<span className="gold">G</span>E !
            </h4>
            <h3>
              {" "}
              A <span className="red">{"book My Show"}</span> Group{" "}
            </h3>
          </p>
        </div>
      </div>
    </>
  );
};

export default Seats;

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <h1>
        {" "}
        Bin<span className="gold">{"g"}</span>eBoy{" "}
      </h1>
      <h4> Its Movie time! </h4>

      <img
        className="motion poster"
        src="https://s3.amazonaws.com/pbblogassets/uploads/2017/07/oz-wicked-witch-poster.gif"
        alt="Girl in a jacket"
      />

      <p>
        {" "}
        <label htmlFor="movie">Select your Binge!</label>
      </p>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} ({movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Not Now</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Vacant</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}

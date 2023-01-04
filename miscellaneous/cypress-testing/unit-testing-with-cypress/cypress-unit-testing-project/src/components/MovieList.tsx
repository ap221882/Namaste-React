import { useState } from "react";

function Movielist() {
  const [userInput, setUserInput] = useState<any>("");
  const [movieList, setMovieList] = useState<any>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {};

  const handleSeen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};

  return (
    <div className="wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={userInput}
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Movie wishlist"
        />
        <button>+Add movies</button>
      </form>
      <div className="movieList">
        {!movieList && (
          <span data-cy="empty" className="empty">
            No movies here
          </span>
        )}
        <ul data-cy="movie-list">
          {movieList &&
            movieList.map((m: any) => {
              return (
                <li
                  onClick={(e) => handleClick(e)}
                  className={m.seen ? "strike movie-list" : "movie-list"}
                  id={m.id}
                  key={m.id}
                >
                  <span>
                    {m.movie}
                    'X'
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      {movieList.length > 0 && (
        <>
          <button
            data-cy="clear-movie"
            className="outline-btn"
            onClick={(e) => handleSeen(e)}
          >
            Clear seen movies
          </button>
        </>
      )}
    </div>
  );
}

export default Movielist;

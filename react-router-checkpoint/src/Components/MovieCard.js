import { useHistory } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
    const history = useHistory();

    return (
        <div
            className="card movie_card"
            onClick={() => history.push(`/details/${movie.id}`)}
        >
            {movie && (
                <>
                    <img
                        src={movie.posterURL}
                        className="card-img-top"
                        alt="movie-poster"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="movie_info">{movie.description}</p>
                        <span className="float-right">
                            <i className="fas fa-star"></i> {movie.rate} / 10
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}

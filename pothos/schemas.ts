import { builder } from "./builder";
import "./models/User";
import "./models/Movie";
import "./models/TvShow";
import "./models/UserTopFiveMovies";
import "./models/UserTopFiveTvShows";
import "./models/UserWatchedMovies";
import "./models/UserWatchedTvShows";
import "./models/UserWantToWatchMovies";
import "./models/UserWantToWatchTvShows";

export const schema = builder.toSchema({});

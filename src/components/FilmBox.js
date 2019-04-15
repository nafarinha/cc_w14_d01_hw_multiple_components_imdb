import React, {Component, Fragment} from 'react';
import FilmList from 'FilmList';

class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.release_data = {
      data: [
        {
          id: 1,
          name: "Avengers: Endgame",
          url: "https://www.imdb.com/title/tt4154796/?ref_=rlm"
        },
        {
          id: 2,
          name: "Tolkien",
          url: "https://www.imdb.com/title/tt3361792/?ref_=rlm"
        },
        {
          id: 3,
          name: "A Dog's Journey",
          url: "https://www.imdb.com/title/tt8385474/?ref_=rlm"
        },
        {
          id: 4,
          name: "Pokémon Detective Pikachu",
          url: "https://www.imdb.com/title/tt5884052/?ref_=rlm"
        },
        {
          id: 5,
          name: "Aladdin",
          url: "https://www.imdb.com/title/tt6139732/?ref_=rlm"
        }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Upcoming Film Releases for the UK</h1>
        <hr></hr>
        <FilmList data = {this.release_data}/>
        <hr></hr>
        <button><a href='//www.imdb.com/calendar/?region=gb'>View more upcoming release &raquo;</a></button>

      </Fragment>
    )

  }

}

export default FilmBox;

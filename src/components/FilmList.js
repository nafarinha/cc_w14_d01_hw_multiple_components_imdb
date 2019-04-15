import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
  render() {
    const filmNodes = this.props.data.map(film => {
      return (
        <Film url={film.url} key={film.id}>{film.name}</Film>
      )
    })

    return (
      <ul className="film-list">
        {filmNodes}
      </ul>
    )
  }

}

export default FilmList;

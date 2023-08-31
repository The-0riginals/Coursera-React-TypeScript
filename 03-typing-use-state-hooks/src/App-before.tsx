import { movies } from './movies';

type MovieProps = {
  title: string;
  year: number;
};

const Movie = ({ title, year }: MovieProps) => {
  return (
    <article>
      <header>{title}</header>
      <p>
        <span>{year}</span>
      </p>
      <footer>
        <button>Toggle</button>
      </footer>
    </article>
  );
};

const Application = () => {
  return (
    <main>
      {movies.map((m) => (
        <Movie title={m.title} year={m.year} key={m.id} />
      ))}
    </main>
  );
};

export default Application;

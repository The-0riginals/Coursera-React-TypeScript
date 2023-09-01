import * as React from 'react';
// hover underlined items for information
import { HeroType, fetchHero } from './heroes';
import { HeroInformation } from './HeroInformation';

//async is a keyword that you put in front of a function declaration to turn it into an async function
//async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code
// https://viblo.asia/p/tim-hieu-ve-synchronous-va-asynchronous-trong-javascript-3Q75w7ze5Wb
const Application = () => {
  const [hero, setHero] = React.useState<HeroType | null>(null);

  React.useEffect(() => {
    fetchHero().then(h => setHero(h));
  }, []);

  ////if hero is not null, then render HeroInformation
  return <main>
    {hero && <HeroInformation hero={hero} />}
  </main>;
};

export default Application;
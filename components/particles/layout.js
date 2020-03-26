import { Header} from '../organisms'
import { useState } from 'react';

const withLayout = Page => {
  const [nav, setNav] = useState(0)

  return () => (
    <>
      <Header />
      <Page />
    </>
  );
};

export default withLayout;
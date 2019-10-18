import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { EthertonSite } from '../src/EthertonSite.js';
import '../etherton-site.js';

storiesOf('etherton-site', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(EthertonSite))
  .add(
    'Alternative Title',
    () => html`
      <etherton-site .title=${'Something else'}></etherton-site>
    `,
  );

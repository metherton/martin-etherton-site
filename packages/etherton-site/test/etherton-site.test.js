import { html, fixture, expect } from '@open-wc/testing';

import '../etherton-site.js';

describe('EthertonSite', () => {
  it('has page "main" by default', async () => {
    const el = await fixture(html`
      <etherton-site></etherton-site>
    `);

    expect(el.page).to.equal('main');
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders page-one if page property is set to pageOne', async () => {
    const el = await fixture(html`
      <etherton-site page="pageOne"></etherton-site>
    `);
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-one></page-one>
    `);
  });

  it('changes the page if a menu link gets clicked', async () => {
    const el = await fixture(html`
      <etherton-site></etherton-site>
    `);
    el.shadowRoot.querySelectorAll('header a')[2].click();

    expect(el.page).to.equal('about');
  });

  it('should have a menu option to Home', async () => {
    const el = await fixture(html`
      <etherton-site></martinetherton-site>
    `);
    const menuOption = (el.shadowRoot.querySelectorAll('header ul li a'))[0].innerText;
    expect(menuOption).to.equal('Home');
  });

  it('should have a menu option to One Name Study', async () => {
    const el = await fixture(html`
      <etherton-site></martinetherton-site>
    `);
    const menuOption = (el.shadowRoot.querySelectorAll('header ul li a'))[1].innerText;
    expect(menuOption).to.equal('ONS');
  });
});

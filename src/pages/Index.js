import React from 'react';
import Screen from '../components/Template/IntroScreen';

// import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
// const { height } = window.screen.height;

const Index = () => (
  <section id="intro">
    <div className="logo">
      <a href="#Products" type="button">label</a>
      <img src={`${PUBLIC_URL}/images/HellButton.png`} alt="" />
    </div>
    <Screen
      data={
        <div>
          <h1> <a href="/Universities" type="button">Universities &#x1F528;&#x1F528;&#x1F528;</a> </h1>
          <h1 className="right"> <a href="/Valor" type="button">Valor</a> </h1>
          <h1> <a href="/Prodigy" type="button">Prodigy &#x1F528;&#x1F528;&#x1F528;</a> </h1>
          <h1 className="right"> <a href="/WarCatan" type="button">War Catan</a> </h1>
          <h1> <a href="/Vagabond" type="button">Vagabond &#x1F528;&#x1F528;&#x1F528;</a> </h1>
          <h1 className="right"> <a href="/Pokemon" type="button">Pokemon Glacier and Aurora</a> </h1>
          <h1> <a href="/Homebrew" type="button">5e Homebrew &#x1F528;&#x1F528;&#x1F528;</a> </h1>
          <h2 style={{ margin: '20px 0px 0px 0px', position: 'absolute', bottom: '0px' }}>
            <a href="#Story" type="button">Story</a>
          </h2>
        </div>
      }
      sub="Just some fun stuff we pulled out of the brew"
      title="Products"
    />
    {/* <Screen
      data={
        <div>
          <h1>
            Story
          </h1>
          <h2 style={{ margin: '20px 0px 0px 0px', position: 'absolute', bottom: '0px' }}>
            <a href="#Products" type="button">Products</a>
          </h2>
        </div>
      }
      sub="We are just two dumb nerds trying to make cool games."
      title="Story"
    /> */}
  </section>
);

export default Index;

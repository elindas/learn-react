import React from 'react';
import foto from './foto.png'
import picture from './programming.jpeg'
import iconfb from './fb.jpg'
import iconig from './ig.svg'
import './App.css';
import Counter from './component/Counter'

function App() {
  return (
    <div className="App">
      <h2 className="title">About me</h2>
      <img src={foto} alt="foto" className="gambar" />
      <div className="about">
        <p className="aboutme">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore eum tempora, illum a obcaecati vel ratione suscipit quidem dolor ab mollitia tenetur sunt, autem alias possimus nostrum optio? Molestias, voluptatem.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={picture} alt="coding" className="pic" />
            <h4>Programming</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum ut dolorum ipsam nam similique nesciunt blanditiis error sit, reiciendis, assumenda aperiam, soluta nemo officia aut esse et? Perferendis, iure.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={picture} alt="coding" className="pic" />
            <h4>Programming</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum ut dolorum ipsam nam similique nesciunt blanditiis error sit, reiciendis, assumenda aperiam, soluta nemo officia aut esse et? Perferendis, iure.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={picture} alt="coding" className="pic" />
            <h4>Programming</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum ut dolorum ipsam nam similique nesciunt blanditiis error sit, reiciendis, assumenda aperiam, soluta nemo officia aut esse et? Perferendis, iure.</p>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <Counter />

        <div className="card-body">
          <p className="card-text">For more info</p>
          <a href="/#" className="btn">Contact me</a>
        </div>

      </div>


      <div className="link">
        <a href="https://www.instagram.com/"><img src={iconfb} alt="ig" class="icon" /></a>
        <a href="https://www.facebook.com/"><img src={iconig} alt="fb" class="icon" /></a>
      </div>


    </div>
  );
}

export default App;

import React from "react";
import './main.css';
import artista1 from '../assets/playlist/1.jpeg';
import artista2 from '../assets/playlist/2.png';
import artista3 from '../assets/playlist/3.jpeg';
import artista4 from '../assets/playlist/4.jpeg';
import artista5 from '../assets/playlist/5.jpeg';
import artista6 from '../assets/playlist/6.jpeg';
import artista7 from '../assets/playlist/7.jpeg';
import artista8 from '../assets/playlist/8.jpeg';
import artista9 from '../assets/playlist/9.jpeg';
import artista10 from '../assets/playlist/10.jpeg';
import artista11 from '../assets/playlist/11.jpeg';
import artista12 from '../assets/playlist/12.jpeg';
import artista13 from '../assets/playlist/13.jpeg';
import artista14 from '../assets/playlist/14.jpeg';
import artista15 from '../assets/playlist/15.jpeg';

const MainContent = () => {
    return (
        <div className="container-principal">
            <div className="principal">
                <span className="principal-saudacao">Boa Noite</span>
                <h2>Navegar por todas as seções</h2>

                <div className="offer__scroll-container">
                    <div id="result-playlists" className="offer__list">
                        <secction className="playlists">

                            <a href="#" className="card">
                                <div className="card card1">
                                    <img src={artista1} alt="playlist boas fetas" />
                                    <span className="playlist-title">Boas Festas</span>
                                </div>
                            </a>


                            <a href="#" className="card">
                                <div className="card card2">
                                    <img src={artista2} alt="playlist boas fetas" />
                                    <span className="playlist-title">Feitos para você</span>
                                </div>
                            </a>


                            <a href="#" className="card">
                                <div className="card card3">
                                    <img src={artista3} alt="playlist boas fetas" />
                                    <span className="playlist-title">Lançamentos</span>
                                </div>
                            </a>


                            <a href="#" className="card">
                                <div className="card card4">
                                    <img src={artista4} alt="playlist boas fetas" />
                                    <span className="playlist-title">Creator</span>
                                </div>
                            </a>


                            <a href="#" className="card">
                                <div className="card card5">
                                    <img src={artista5} alt="playlist boas fetas" />
                                    <span className="playlist-title">Para Treinar</span>
                                </div>
                            </a>


                            <a href="#" className="card">
                                <div className="card card6">
                                    <img src={artista6} alt="playlist boas fetas" />
                                    <span className="playlist-title">Para Treinar</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card7">
                                    <img src={artista7} alt="playlist boas fetas" />
                                    <span className="playlist-title">Sertanejo</span>
                                </div>
                            </a>


                            <a href="#" className="card">
                                <div className="card card8">
                                    <img src={artista8} alt="playlist boas fetas" />
                                    <span className="playlist-title">Samba e pagode</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card9">
                                    <img src={artista9} alt="playlist boas fetas" />
                                    <span className="playlist-title">Funk</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card10">
                                    <img src={artista10} alt="playlist boas fetas" />
                                    <span className="playlist-title">MPB</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card11">
                                    <img src={artista11} alt="playlist boas fetas" />
                                    <span className="playlist-title">Rock</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card12">
                                    <img src={artista12} alt="playlist boas fetas" />
                                    <span className="playlist-title">Hip Hop</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card13">
                                    <img src={artista13} alt="playlist boas fetas" />
                                    <span className="playlist-title">Indie</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card14">
                                    <img src={artista14} alt="playlist boas fetas" />
                                    <span className="playlist-title">Relax</span>
                                </div>
                            </a>

                            <a href="#" className="card">
                                <div className="card card15">
                                    <img src={artista15} alt="playlist boas fetas" />
                                    <span className="playlist-title">Música Latina</span>
                                </div>
                            </a>


                        </secction>
                    </div>


                </div>


                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href="">
                                    <span className="artist-name" id="artist-name"></span>
                                    <span className="artist-categorie">Artista</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainContent;



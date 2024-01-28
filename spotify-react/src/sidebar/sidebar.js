import React from "react";
import './sidebar.css';

import logoSpotify from '../assets/icons/logo-spotify.png'
import logoBiblioteca from '../assets/icons/biblioteca.svg'
import botaoPlus from '../assets/icons/plus.svg'

const SideBar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="#">
                        <img src={logoSpotify} alt="Logo do Spotify" />
                    </a>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">
                                <span className="fa fa-home"></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-search"></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="sidebar__biblioteca">
                <div className="sidebar__biblioteca-titulo">
                    <a href="">
                        <img src={logoBiblioteca} alt="logo biblioteca" />
                        <span>Sua Biblioteca</span>
                    </a>
                    <button>
                        <img src={botaoPlus} alt="botao mais" />
                    </button>
                </div>

                <div className="biblioteca__criar-playlist">
                    <h2>Crie sua primeira playlist</h2>
                    <span>É fácil, vamos te ajudar</span>
                    <a href="#">Criar Playlist</a>
                </div>

                <div className="biblioteca__seguir-podcast">
                    <h2>Que tal seguir um podcast novo?</h2>
                    <span>Avisaremos você sobre novos episódios</span>
                    <a href="#">Explore Podcasts</a>
                </div>

                <div className="cookies">
                    <a href="#">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>


            </nav>
        </div>
    )
}

export default SideBar;
import './Home.css';
import imgcell from '../../assets/images/cell-phone.png'
import placeholder from '../../assets/images/placeholder.jpg'
import icon from '../../assets/images/marker1.png'

export default function Home() {
    return (
        <>
            <div className='container-first-section'>
                <div className='first-section-text'>
                    <h1>Mapeando riscos, salvando vidas com tecnologia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet magna augue, a scelerisque quam efficitur et. Proin quis porttitor ligula.</p>
                </div>
                <div className='banner'>
                    <img src={placeholder}></img>
                </div>
            </div>
            <div className='pitch-section'>
                <div>
                    <iframe
                        width="760"
                        height="515"
                        src="https://www.youtube.com/embed/-RS-jl78_lY?si=1P3Y9NFM5fBhIyQF"
                        title="Vídeo pitch"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
                <div className='pitch-texto'>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet magna augue, a scelerisque quam efficitur et. Proin quis porttitor ligula.</p>
                </div>
            </div>
            <div className='app-section'>
                <div className='app-text-section'>
                    <div className='text-s-title'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet magna augue, a scelerisque quam efficitur et. Proin quis porttitor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='app-cards-section'>
                        <div className='card-row'>
                            <div className='card'>
                                <img src={ icon }/>
                                <div>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={ icon }/>
                                <div>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-row'>
                            <div className='card'>
                                <img src={ icon }/>
                                <div>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img src={ icon }/>
                                <div>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='app-image-section'>
                    <img src={imgcell} alt="Celular com aplicativo" />
                </div>
            </div>
        </>
    );
}

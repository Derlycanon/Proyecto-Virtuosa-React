import NoAlert from '../../components/header/NoAlert';
import '../../../src/components/cardsmk/cards.css';

import card1 from '../../components/assets/img/maquillaje/banner/ojos/Delineador1.png';
import card2 from '../../components/assets/img/maquillaje/banner/ojos/Delineador2.png';
import card3 from '../../components/assets/img/maquillaje/banner/ojos/Delineador3.png';


function Modal1() {
    return (
        <div>
            <NoAlert/>         
            <div className="contenedor">
                <h1>Los más vendidos</h1>
                <div className="container">    
                </div>

                <div className="container2">
                    <div className="card">
                        <div className="venta1">
                            <a href="#modal">
                                <img src={card1} alt="" />
                            </a>
                        </div>

                        <div className="text-card" id="product1">
                            <a href="#modal">
                                <h4>Delineador1</h4>
                            </a>
                            <p>$ 50.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Delineador1</h2>
                                        <p className="modalP">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                                        </p>
                                        <div className="select-icon">                                    
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card">
                        <div className="venta2">
                            <a href="#modal2"><img src={card2} alt="" /></a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal2"><h4>Delineador2</h4></a>
                            <p>$ 30.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal2" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Delineador2</h2>
                                        <p className="modalP">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </p>
                                        <div className="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="venta3">
                            <img src={card3} alt=""></img>
                        </div>
                        <div className="text-card venta-font" id="product1">
                            <a href="#modal3">
                                <h4>Delineador3</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal3" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Delineador3</h2>
                                        <p className="modalP">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                                        </p>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal1;
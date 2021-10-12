import './App.css';
import 'react-bootstrap';
import InfiniteCarousel from 'react-leaf-carousel';
import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Carousel  from 'react-elastic-carousel'
import { Slider } from '@material-ui/core';

const breakPoints = [
    { width: 1, itemsToShow: 3 },
    // { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    // { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 3 }
  ];

function App() {
    const [items, setItems] = useState(["image image1 items", "image image2 items",
    "image image3 items", "image image1 items",
    "image image2 items", "image image3 items",
    "image image1 items", "image image2 items"]);
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const addItem = () => {
        const nextItem = Math.max(1, items.length + 1);
        setItems([...items, nextItem]);
      };
    
      const removeItem = () => {
        const endRange = Math.max(0, items.length - 1);
        setItems(items.slice(0, endRange));
      };

    const startTimer = () => {
    const countDownDate = new Date("Nov 30,2021").getTime();

    interval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance < 0) {
        // Stop Timer
            clearInterval(interval.current);
        } else {
        // Update Timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    });
    };

    useEffect(() => {
    startTimer();
    });
    let [count, setCount] = useState(1);
    function incre() {
        count = count + 1;
        setCount(count);
    }

    function decre() {
        if (count - 1 >= 1) {
            count = count - 1;
            setCount(count);
        }
    }
  window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

  });
  return (
    <div>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Faceless Fighters Collection</title>
        {/* <!-- Favicon--> */}
        <link rel="icon" type="image/x-icon" href="./assets/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
        {/* <!-- Font Awesome icons (free version)--> */}
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        {/* <!-- Google fonts--> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker@&isplay=swap" rel="stylesheet" type="text/css" />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href="css/styles.css" rel="stylesheet"/>
     </head>
    <body id="page-top">
        {/* <!-- Navigation--> */}
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <div>
                    <h1 class="white">Faceless</h1>
                    <h4 class="color_blue fighter">Fighters</h4>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase mx-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#About">Game</a></li>
                        <li class="nav-item"><a class="nav-link" href="#mint">Fights</a></li>
                        <li class="nav-item"><a class="nav-link" href="#Roadmap">Vip Club</a></li>
                        <li class="nav-item"><a class="nav-link" href="#team">Play Arena</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">rule</a></li>
                        <li class="nav-item"><a class="nav-link" href="#team">Roadmap</a></li>
                        <li class="nav-item"><a class="color_red" href="#contact">Team</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead row">
            <div class="container navbar-dark text-align">
            <div class=" m-3">
                <div class="position-absolute"><h1 class=" face_titre color_blue flottes">FACELESS</h1></div>
                <br/>
                <div><h2 class=" face_titre white titre_face flottes">FIGHTERS</h2></div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
                <div class="masthead-heading texte"><p class="texte m-5">Faceless Fighters is an extraordinary collection of 10,000 fighter NFTs secured on the Ethereum blockchain. Once
you buy an NFT, you get special access to a next-generation, truly exhilarating, live, multiplayer,
battle-style, play-to-earn game!</p></div>
                <div class="padd"><a class="btn btn-primary btn-xl  m-5 text-uppercase flottes" href="#Roadmap">
                    <span>become </span><br></br>
                    <span>a Faceless Fighter</span></a></div>
            </div>
        </header>
        {/* <!-- Services--> */}
        {/* <div class ="fond_1 flex"/> */}
        <div class="fond_6">
        <section class=" page-section" id="About">
            <div class=" navbar-dark flex">
                <div class="container tail">
                    <div class="te ">
                        <h1 class=" white text-uppercase">Round</h1>
                        <br></br>
                        <h1 class=" white text-uppercase">1 Fights Begin In </h1>
                    </div>
                <Clock
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                />
                <div class ="white pad">
                    <span>Ready. Set… let’s play.</span>
                </div>
                <div class="pad1">
                    <a class="btn btn-primary btn-xl m-3 text-uppercase">
                    <span>Mint your </span><br></br>
                    <span>Faceless Fighter</span></a>
                </div>
                </div>
                <div class="taill">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
              <div class={item}></div>
          ))}
        </Carousel>
      </div>
            </div>
            </div>
            <div class ="flex text-center">
                <img class = "vector" src="./assets/Vector-Left.png" alt="" />
                <h2 class="test_vector section-heading text-uppercase m-3 color_blue">An Exclusive, VIP Fight Club Own. Fight. Earn.</h2>
                <img class = "vector" src="./assets/Vector-Right.png" alt="" />
            </div>
        </section>
        </div>
        {/* <!-- mint Grid--> */}
        <section class=" fond_2 page-section" id="mint">
            {/* <div class ="flex text-center">
                <img class = "vector" src="./assets/Vector-Left.png" alt="" />
                <h2 class="test_vector section-heading text-uppercase m-3 color_blue">An Exclusive, VIP Fight Club Own. Fight. Earn.</h2>
                <img class = "vector" src="./assets/Vector-Right.png" alt="" />
            </div> */}
            <div class="container">
                <div class ="text-center">
                <h3 class="section-subheading white">Shrouded in mystery and rarity, renowned for ultimate combat capability. </h3>
                <div class="masthead-heading "><p class=" m-5 color_grey">With your decision to become a Faceless Fighter, you are choosing to enter an exclusive, VIP fight club. Within this club, you will take part in live, multiplayer, battle-style tournaments and competitions that put your strategic thinking and your character’s skills to the test. Think of it like a thrilling high-stakes game of digital chess or poker played with NFTs instead of game pieces or cards!  </p></div>
                <div class="containere m-5">
                    <div class="card">
                        <div class="image image1">
                        <div class="tail flex tests">
                                <div class="m-3">
                                    <div><h1 class="white color_blue flottes">You play </h1></div>
                                    <br/>
                                    <div><h2 class="white  flottes">Arena</h2></div>  
                                </div>
                                <div class="flottes">
                                    <span class="white">Your play arena is hosted on a high-powered app. Once you purchase a Faceless Fighter NFT, you will be able to access the app and</span>
                                    <span class="color_blue"> enter any competition or tournament.</span> 
                                    <span class="white">With each successful game played, you will </span>
                                    <span class="color_blue">win tokens</span>
                                    <span class="white"> that can be used in the game.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image image2">
                            <div class="tail flex tests">
                                <div class="m-3">
                                    <div><h1 class="white color_blue flottes">You play </h1></div>
                                    <br/>
                                    <div><h2 class="white  flottes">Arena</h2></div>  
                                </div>
                                <div class="flottes">
                                    <span class="white">Your play arena is hosted on a high-powered app. Once you purchase a Faceless Fighter NFT, you will be able to access the app and</span>
                                    <span class="color_blue"> enter any competition or tournament.</span> 
                                    <span class="white">With each successful game played, you will </span>
                                    <span class="color_blue">win tokens</span>
                                    <span class="white"> that can be used in the game.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image image3">
                        <div class="tail flex tests">
                                <div class="m-3">
                                    <div><h1 class="white color_blue flottes">You play </h1></div>
                                    <br/>
                                    <div><h2 class="white  flottes">Arena</h2></div>  
                                </div>
                                <div class="flottes">
                                    <span class="white">Your play arena is hosted on a high-powered app. Once you purchase a Faceless Fighter NFT, you will be able to access the app and</span>
                                    <span class="color_blue"> enter any competition or tournament.</span> 
                                    <span class="white">With each successful game played, you will </span>
                                    <span class="color_blue">win tokens</span>
                                    <span class="white"> that can be used in the game.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                        <div class="fit"><h3 class="section-subheading white">We're about to drop new, must-have NFTs. 
                        Are you brave enough to become a Faceless Fighter?
                        </h3></div>
                    <div><a class="btn btn-primary1 btn-xl m-3">ENTER THE CLUB</a></div>
                </div>
            </div>
            <div class ="flex text-center">
                <img class = "vector" src="./assets/Vector-Left.png" alt="" />
                <h2 class="test_vector section-heading text-uppercase m-3 color_blue">The Most Important Rule Of Faceless Fighters...</h2>
                <img class = "vector" src="./assets/Vector-Right.png" alt="" />
            </div>
        </section>
        {/* <!-- About--> */}
        <section class="page-section fond_3" id="Roadmap">
        <div class="container">
            <div class="m-3">
                <h2 class=" taille_titre white text-uppercase white">Rule Of</h2>
                <h2 class=" taille_titre white text-uppercase color_blue">Faceless Fighters</h2>
            </div>
            <div class="m-3 f50 ">
                <span class="white taille">To enter the club and play, you must own at least one of our </span><span class ="color_blue taille">NFTs.</span>
            </div>
            <div class="m-3 f50">
                <span class="white taille"> A revolutionary experience, within the Faceless Fighters club, we have combined the strategic fun of old-school, battle-style games with the allure of one-of-a-kind NFTs secured on the Ethereum blockchain! </span>
            </div>
            <div class="m-3 f50 ">
                <span class="white taille2 color_blue ">Yes, that is right.</span>
            </div>
            <div class="m-3 f50">
                <span class="white taille2">Our system is nearly impossible to change, hack, or cheat.</span>
            </div>
            <div class="m-3 f50">
                <span class="white taille">To Join And Start Playing This Thrilling Game,</span>
                <br/>
                <span class="white taille">It Only Costs </span><span class="white taille2 color_blue">0.07 ETH.</span>
            </div>
            <div><a class="btn btn-primary2 m-3">PURCHASE</a></div>
        </div>
        </section>
        {/* <!-- Team--> */}
        <section class="page-section fond_4" id="team">
        <div class ="flex text-center">
                <img class = "vector pad-bot" src="./assets/Vector-Left.png" alt="" />
                <h2 class="test_vector1 section-heading text-uppercase m-3 color_blue">The roadmap to launch</h2>
                <img class = "vector" src="./assets/Vector-Right.png" alt="" />
            </div>
            <div class="container">
                <div class="f70">
                    <span class="white taille color_blue">Buy A Faceless Fighter NFT:</span>
                    <br/>
                    <span class="white taille">we can not stress this enough, to be part of the club, players must buy our one-of-a-kind characters. After purchase, access to the games will be delivered and the NFT character will be used to play. </span>
                </div>
                <div class="f70">
                    <span class="white taille color_blue">Airdrop of 10 NFT characters to random Faceless Fighters:</span>
                    <br/>
                    <span class="white taille">when the clock at the top of this page runs out, we will be airdropping 10 free-of-charge NFTs to anyone who has purchased a Faceless Fighter. This is a one-time-only offer.</span>
                </div>
                <div class="f70">
                    <span class="white taille color_blue">Organize and sponsor a Free Fight tournament in real life:</span>
                    <br/>
                    <span class="white taille">to kick off the fights, we will host a real, free event where players will have an opportunity to meet, play, boost rank, gain notoriety, and get prizes just for participating. </span>
                </div>
                <div class="f70">
                    <span class="white taille color_blue">Creation of Fight Tokens that will be used within the game:</span>
                    <br/>
                    <span class="white taille">after this first tournament we will create prizes for winners in the form of Fight Tokens. These tokens can be used to increase character fighting skills. </span>
                </div>
                <div class="f70">
                    <span class="white taille color_blue">Launch of the multiplayer game:</span>
                    <br/>
                    <span class="white taille">the last step of the rollout is to deploy games where a number of players can join. This will allow people to invite friends and then engage in large battles with high value. After all, the more players, the more fun! </span>
                </div>
            </div>
        </section>
        {/* <!-- Team--> */}
        <div class="fond_5">
        <section class="page-section" id="team">
            <div class ="flex text-center pad-bot">
                <img class = "vector" src="./assets/Vector-Left.png" alt="" />
                <h2 class="section-heading test_vector text-uppercase m-3 color_blue">Successful NFT Owner and Game Producer</h2>
                <img class = "vector" src="./assets/Vector-Right.png" alt="" />
            </div>
            <div class="container">
                <div class="bottom3">
                    <span class="white taille">Dear fighters, </span>
                </div>
                <div class="bottom3">
                    <span class="white taille">As someone who has spent more than 15 years producing games as well as someone who has invested in NFTs and seen profit, today, I am very excited to introduce to you Faceless Fighters.</span>
                </div>
                <div class="bottom3">
                    <span class="white taille">At its core, this game is a fun, classic, multiplayer, live fight experience. And, it’s developed to satisfy your desire to take part in fast-paced, competitive tournaments or competitions for money.</span>
                </div>
                <div class="bottom3">
                    <span class="white taille">However, when digging deeper, you will begin to realize Faceless Fighters also works to resolve the issue of NFT utility. In that, I mean, after buying an NFT, nothing really happens. It’s a classic, “I have it, now what?” situation. </span>
                </div>
                <div class="bottom3">
                    <span class="white taille">Here’s the answer. </span>
                </div>
                <div class="bottom3">
                    <span class="white taille">Use your NFTs to play a game you love!</span>
                </div>
                <div class="bottom3">
                    <span class="white taille">Even better, each Faceless Fighter NFT has no face or recognizable features. This allows you to use them as your profile picture regardless of sex, age, race, etc. </span>
                </div>
                <div class="bottom3">
                    <span class="white taille">I guess, it really boils down to this…</span>
                </div>
                <div class="bottom3">
                    <span class="white taille">Together, we -- you the player along with my amazing dev team and my pro experience -- are connecting state-of-the-art technology with the gaming community. And, in doing so, we are tapping into a high-stakes world that is rapidly growing.</span>
                </div>
                <div class="bottom3">
                    <span class="white taille">This is the future and I’m so excited for you to be part of it! </span>
                </div>
                <div class="bottom3">
                    <span class="white taille">Let’s fight,</span>
                    <span class="white taille">Ring Leader</span>
                </div>
            </div>
        </section>
        {/* <!-- Services--> */}
        <section class="page-section" id="About">
            <div class ="flex text-center pad-bot">
                <img class = "vector" src="./assets/Vector-Left.png" alt="" />
                <h2 class="section-heading text-uppercase m-3 color_blue test_vector1">Meet the team</h2>
                <img class = "vector" src="./assets/Vector-Right.png" alt="" />
            </div>
            <div class="container navbar-dark">
                <div class="containere m-5 bottom3">
                    <div class="cards">
                        <div class="image image1">
                        </div>
                        <span class="color_blue taille2">Ganondorf:</span>
                        <br/>
                        <span class="white taille2">Ring Leader aka the owner.</span>
                    </div>
                    <div class="cards">
                        <div class="image image2">
                        </div>
                        <span class="color_blue taille2">Rudolf: </span>
                        <br/>
                        <span class="white taille2">Chief Of Fighters aka the chief of staff.</span>
                    </div>
                    <div class="cards">
                        <div class="image image3">
                        </div>
                        <span class="color_blue taille2">Gundolf:</span>
                        <br/>
                        <span class="white taille2">Technical Fight Coach aka the tech guy.</span>
                    </div>
                    <div class="cards">
                        <div class="image image1">
                        </div>
                        <span class="color_blue taille2">Ingolf:</span>
                        <br/>
                        <span class="white taille2">Fight Director aka the art director.</span>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Contact--> */}
        <section class="page-section" id="Contact">
            <div class="container">
                <div class="text-center m-5">
                    <h2 class="section-heading text-uppercase m-3 color_blue">Become A Faceless Fighter</h2>
                </div>
                <div class="text-center"><a class="btn btn-primary2 btn-xl1 m-3">Buy Now</a></div>
            </div>
        </section>
        </div>
        {/* <!-- Footer--> */}
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">How to order</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Promo</a></li>
                            <li><a href="#">Payment Method</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">History</a></li>
                            <li><a href="#">our team</a></li>
                            <li><a href="#">Brand guidelines</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Faceless Fighters</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-whatsapp"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Faceless Fighters © 2018</p>
            </div>
        </footer>
    </div>
        {/* <!-- mint Modals--> */}
        {/* <!-- mint item 1 modal popup--> */}
        <div class="mint-modal modal fade" id="mintModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Faceless Fighters</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="./assets/img/portfolio/1.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Threads
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Illustration
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- mint item 2 modal popup--> */}
        <div class="mint-modal modal fade" id="mintModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="./assets/img/portfolio/2.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Explore
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Graphic Design
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- mint item 3 modal popup--> */}
        <div class="mint-modal modal fade" id="mintModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="./assets/img/portfolio/3.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Finish
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Identity
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- mint item 4 modal popup--> */}
        <div class="mint-modal modal fade" id="mintModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="./assets/img/portfolio/4.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Lines
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Branding
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- mint item 5 modal popup--> */}
        <div class="mint-modal modal fade" id="mintModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="./assets/img/portfolio/5.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Southwest
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Website Design
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- mint item 6 modal popup--> */}
        <div class="mint-modal modal fade" id="mintModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="./assets/img/portfolio/6.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Window
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Photography
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        {/* <!-- * *                               SB Forms JS                               * *--> */}
        {/* <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *--> */}
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
    </div>
  );
}

export default App;

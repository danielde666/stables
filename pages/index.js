// pages/index.js in your Next.js project

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css'; // Assuming you have a CSS module or global CSS

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleEnterClick = () => {
    setShowSplash(false);
  };

  return (
    <div>
      <Head>
        <title>The Stables</title>
        <meta
          name="description"
          content="The Stables - Business Development Consultancy, Strategic Wholesale Placement and Management"
        />
        <link rel="icon" href="https://thestables.world/favicon-h.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Inconsolata:wght@200;300;400&family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      {showSplash && (
        <div id="splash" className={styles.splash}>
          <div id="circle" className={styles.circle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="300px"
              height="300px"
              viewBox="0 0 300 300"
            >
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text fill="#000">
                  <textPath xlinkHref="#circlePath">The Stables</textPath>
                </text>
              </g>
            </svg>
            <button onClick={handleEnterClick} className={styles.enterButton}>ENTER</button>
          </div>
        </div>
      )}

      {!showSplash && (
        <div className={styles.mainOuter}>
          <header>
            <h1 className={styles.logoHeader}>
              <Image
                src="https://thestables.world/stableslogo.png"
                alt="Logo"
                width={100}
                height={50}
                className={styles.logo}
              />
              <Image
                src="https://thestables.world/favicon-h.png"
                alt="Horse Icon"
                width={50}
                height={50}
                className={styles.horse}
              />
            </h1>
          </header>

          <div className="container-fluid">
            <div className={styles.mainList}>
              <div className={styles.listItem} id="services">
                <h2>SERVICES</h2>
                <p style={{ textTransform: 'uppercase' }}>B2B | High Touch Sales | Distribution | Strategy</p>
              </div>
              <div className={styles.listItem} id="clients">
                <h2>BRANDS</h2>
                <p>
                  <a href="#" className="altra">ALTRA &rarr;</a> <br />
                  <a href="#" className="capbeauty">CAP BEAUTY &rarr;</a> <br />
                  <a href="#" className="corpus">CORPUS &rarr;</a> <br />
                  <a href="#" className="dedcool">DEDCOOL &rarr;</a> <br />
                  <a href="#" className="dore">DORÉ &rarr;</a> <br />
                  <a href="#" className="maude">MAUDE &rarr;</a> <br />
                  <a href="#" className="skyhighfarmuniverse">SKY HIGH FARM UNIVERSE &rarr;</a> <br />
                  <a href="#" className="standardprocedure">STANDARD PROCEDURE &rarr;</a> <br />
                  <a href="#" className="sweetchemistry">SWEET CHEMISTRY &rarr;</a> <br />
                  <a href="#" className="thegrey">THE GREY &rarr;</a> <br />
                  <a href="#" className="uniform">UNIFORM™ &rarr;</a> <br />
                  <a href="#" className="vacation">VACATION® &rarr;</a> <br />
                </p>
              </div>
              <div className={styles.listItem} id="previous">
                <p>
                  <a href="https://app.next.nuorder.com/thestables" target="_blank" rel="noopener noreferrer">
                    VISIT OUR WHOLESALE PORTAL &rarr;
                  </a><br />
                  <a href="#" className="fw24">2024 MARKET DATES &rarr;</a><br />
                  <a href="https://meetings.hubspot.com/luke647" target="_blank" rel="noopener noreferrer">
                    SCHEDULE A VIRTUAL APPOINTMENT &rarr;
                  </a>
                </p>
              </div>
              <div className={styles.listItem} id="contact">
                <h2>CONTACT</h2>
                <a
                  href="https://www.instagram.com/wsanyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textTransform: 'uppercase', lineHeight: '12px', display: 'block' }}
                >
                  New York Office<br />
                  WSA - 161 Water Street #2205<br />
                  New York, NY
                </a>
                <br />
                <a href="mailto:info@thestables.world">info@thestables.world</a>
                <br />
                <a href="#" className="signup">sign up &rarr;</a>
                <br />
                <a href="https://www.instagram.com/thestables.world/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://thestables.world/ig.png"
                    alt="Instagram Icon"
                    width={10}
                    height={10}
                    className="ig"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

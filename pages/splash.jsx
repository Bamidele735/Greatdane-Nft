import Head from "next/head";
import React from "react";
import Marquee from "react-fast-marquee";
import CoinBase from "../public/images/Vexer  1 of 10.png";
import Metamask from "../public/images/Fuse 4 of 10.png";
import Thirdweb from "../public/images/FOAW.png";
import WalletConnect from "../public/images/FOAW logo.png";
import Firebase from "../public/images/23.png";
import Image from "next/image";
import styles from "../styles/Splash.module.css";
import Loading from "../public/images/greatenft.jpg";
export default function Splash() {
  return (
    <div className={styles.container}>
     
    <div className="HomeMarquee ">
      <h1>Loading....</h1>
    <Marquee gradientWidth={0}pauseOnHover className="Marquee">
      <Image src={Metamask} alt="Metamask image" width={200} className="Marq" />
      <Image src={CoinBase} alt="CoinBase image" width={200} className="Marq" />
      <Image src={Thirdweb} alt="Thirdweb image" width={200} className="Marq" />
      <Image src={WalletConnect} alt="WalletConnect image" width={200} className="Marq" />
      <Image src={Firebase} alt="Firebase image" width={200} className="Marq" />
    </Marquee>
    <Marquee gradientWidth={0} direction="right" pauseOnHover className="Marquee">
      <Image src={Metamask} alt="Metamask image" width={200} className="Marq" />
      <Image src={CoinBase} alt="CoinBase image" width={200} className="Marq" />
      <Image src={Thirdweb} alt="Thirdweb image" width={200} className="Marq" />
      <Image src={WalletConnect} alt="WalletConnect image" width={200} className="Marq" />
      <Image src={Firebase} alt="Firebase image" width={200} className="Marq" />
    </Marquee>
  </div>
      <div className={styles.text_container}>
        <h1 className={styles.animated_text_h1}>Welcome</h1>
      </div>
      <p className={styles.animated_text}>
        “Thank you for visiting Great Dane AI: We are much more than dogs! We
        are the space exploration, flowers year round, soldiers, best friends,
        citizens and much more NFT and DAPP Market Place…”
      </p>
    </div>
  );
}

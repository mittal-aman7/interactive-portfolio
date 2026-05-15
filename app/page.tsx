
import styles from "./page.module.css";
import Image from "next/image";
import Head from "next/head";
import HorizontalScrollerEffect from "./components/HorizontalScroller";
import DesktopController from "./components/DesktopController";


export default function App() {
  return (
    <>
      <Head>
        <title>My Portfolio Interactive</title>
        <link rel="image/png" href="portfolio.png" />
      </Head>
      <main className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/background - Copy.png"
          alt="Room Background"
          fill
          priority
          className="w-full h-full z-0"
          />
        <div className={styles.container}>
          <div className={styles.introBox}>
            <div className={styles.introHeader}>
              

              <div className={styles.avatarBox}>
                <Image
                  src="/DP.png"
                  alt="DP"
                  fill
                  priority
                  />
              </div>
              
              {/* Inject the Client Component here */}
              
            </div>
          </div>
          <div className={styles.desktopControllerRef}>
            <DesktopController>
              <Image
                src="/desktop-copy.png"
                alt='desktop'
                priority
                width={700}
                height={500}
              />
            </DesktopController>

          </div>

          <span className={styles.topRight}></span>
          <span className={styles.bottomLeft}></span>
        </div>
      </main>
      <HorizontalScrollerEffect>
          <div className={`${styles.about} ${styles.content}`}>
            <p>About</p>
          </div>

          <div className={`${styles.tech} ${styles.content}`}>
            <p>Tech</p>
          </div>

          <div className={`${styles.project} ${styles.content}`}>
            <p>Projects</p>
          </div>

          <div className={`${styles.contact} ${styles.content}`}>
            <p>Contact</p>
          </div>

      </HorizontalScrollerEffect>
    </>
    
  );
}
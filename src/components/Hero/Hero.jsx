import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/avatar.jpg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { UseTheme } from '../../store/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = UseTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile pic of Chris' />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Chris
          <br />
          Zhang
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href='https://x.com/HanwenZ55850839' target='_blank'>
            <img src={twitterIcon} alt='Twitter' />
          </a>
          <a href='https://github.com/Chris-Hanwen' target='_blank'>
            <img src={githubIcon} alt='Github' />
          </a>
          <a href='https://www.linkedin.com/in/chris-hanwen/' target='_blank'>
            <img src={linkedinIcon} alt='Linkedin' />
          </a>
        </span>
        <p className={styles.description}>
          A motivated and enthusiastic web developer with a passion for web
          development, seeking a career in the IT industry.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

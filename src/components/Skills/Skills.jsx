import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from './SkillList/SkillList';
import { UseTheme } from '../../store/ThemeContext';
import skillData from '../../data/skillData';

function Skills() {
  const { theme } = UseTheme();
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      {skillData.map((item) => (
        <>
          <div className={styles.skillList}>
            <h3>{item.category}</h3>
            <div>
              {item.skills.map((skill) => (
                <SkillList src={checkMarkIcon} skill={skill} />
              ))}
            </div>
          </div>
          <hr />
        </>
      ))}

      {/* <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='Javasript' />
        <SkillList src={checkMarkIcon} skill='Typescript' />
        <SkillList src={checkMarkIcon} skill='Node' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Redux' />
        <SkillList src={checkMarkIcon} skill='Redux toolkit' />
      </div> */}
    </section>
  );
}

export default Skills;

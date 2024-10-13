import { useEffect, useState } from 'react';
import { SchoolOutlined, WorkOutline } from '@mui/icons-material';

import { TitleContentPage } from '../../components/TitleContentPage';

import { Graduations, Skills, Knowledges } from '../../data/resume';
import {
  GraduationType,
  ExperienceType,
  WorkingSkillType,
  KnowledgeType,
} from '../../@types/Resume';
import { setBorderColor, getIndexMap } from '../../utils/Functions';

import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function Resume() {
  const [graduations, setGraduations] = useState<GraduationType[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [skills, setSkills] = useState<WorkingSkillType[]>([]);
  const [knowledges, setKnowledges] = useState<KnowledgeType[]>([]);
  const [indexEducation, setIndexEducation] = useState<Map<string, number>>(
    new Map(),
  );
  const [indexExperience, setIndexExperience] = useState<Map<string, number>>(
    new Map(),
  );

  const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
  const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

  useEffect(() => {
    setGraduations(Graduations);
  }, []);

  useEffect(() => {
    fetch(`${baseUrlApi}/experiences/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      });
  }, [baseUrlApi, userIdProfile]);

  useEffect(() => {
    setSkills(Skills);
  }, []);

  useEffect(() => {
    setKnowledges(Knowledges);
  }, []);

  useEffect(() => {
    const map = getIndexMap(graduations);

    setIndexEducation(map);
  }, [graduations]);

  useEffect(() => {
    const map = getIndexMap(experiences);

    setIndexExperience(map);
  }, [experiences]);

  function getBorderColorEducation(itemId: string) {
    return setBorderColor(borderColors, indexEducation, itemId);
  }

  function getBorderColorExperience(itemId: string) {
    return setBorderColor(borderColors, indexExperience, itemId);
  }

  return (
    <Styles.ResumeContainer>
      <TitleContentPage title="Resume" />

      <div className="resumeContainer">
        <div className="educationContainer">
          <Styles.Title>
            <SchoolOutlined className="icon" fontSize="large" />
            <Styles.TitleText>Education</Styles.TitleText>
          </Styles.Title>

          {graduations.map((graduation) => {
            return (
              <Styles.Card
                key={graduation.id}
                $borderColor={getBorderColorEducation(graduation.id)}
              >
                <span>{graduation.period}</span>
                <h3>{graduation.title}</h3>
                <p>{graduation.institution}</p>
              </Styles.Card>
            );
          })}
        </div>

        <div className="experienceContainer">
          <Styles.Title>
            <WorkOutline className="icon" fontSize="large" />
            <Styles.TitleText>Experience</Styles.TitleText>
          </Styles.Title>

          {experiences.map((experience) => {
            return (
              <Styles.Card
                key={experience.id}
                $borderColor={getBorderColorExperience(experience.id)}
              >
                <span>{experience.period}</span>
                <h3>{experience.title}</h3>
                <p>{experience.institution}</p>
              </Styles.Card>
            );
          })}
        </div>
      </div>

      <div className="skillsContainer">
        <div>
          <Styles.Title>
            <Styles.TitleText>Working Skills</Styles.TitleText>
          </Styles.Title>

          {skills.map((skill) => {
            return (
              <Styles.Skill key={skill.id} $percentage={skill.percentage}>
                <div className="skillContainer">
                  <span>{skill.description}</span>
                  <span>{`${skill.percentage}%`}</span>
                </div>
              </Styles.Skill>
            );
          })}
        </div>

        <div>
          <Styles.Title>
            <Styles.TitleText>Knowledges</Styles.TitleText>
          </Styles.Title>

          <Styles.Knowledges>
            {knowledges.map((knowledge) => {
              return (
                <div key={knowledge.id} className="knowledge">
                  <div>{knowledge.description}</div>
                </div>
              );
            })}
          </Styles.Knowledges>
        </div>
      </div>
    </Styles.ResumeContainer>
  );
}

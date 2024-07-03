import { useEffect, useState } from 'react';

import { TitleContentPage } from '../../components/TitleContentPage';

import { Expertises } from '../../data/about';
import { ExpertiseType } from '../../@types/About';
import { getIndexMap, setBorderColor } from '../../utils/Functions';

import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function About() {
  const [expertises, setExpertises] = useState<ExpertiseType[]>([]);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    setExpertises(Expertises);
  }, []);

  useEffect(() => {
    const map = getIndexMap(expertises);

    setIndexMap(map);
  }, [expertises]);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  return (
    <Styles.AboutContainer>
      <TitleContentPage title="About Me" />

      <Styles.Greetings>Hi, I’m Marcus. Nice to meet you. </Styles.Greetings>

      <Styles.Text>
        <p>
          I&apos;m Front-end Developer, from Brazil. Since beginning my journey
          8 years ago, I realized that I enjoy turning complex problems into
          beautifully simple things, with code.
        </p>

        <p>
          My aim is to bring across your message and identity in the most
          creative way and adding value to you.
        </p>
      </Styles.Text>

      <Styles.Expertise>
        <Styles.Title>What I do!</Styles.Title>

        <div className="expertiseCards">
          {expertises.map((expertise) => {
            return (
              <Styles.Card
                key={expertise.id}
                $borderColor={getBorderColor(expertise.id)}
              >
                <expertise.icon
                  fontSize="large"
                  className={expertise.iconClassName}
                />
                <div className="cardTexts">
                  <Styles.CardTitle>{expertise.title}</Styles.CardTitle>
                  <Styles.CardText>{expertise.text}</Styles.CardText>
                </div>
              </Styles.Card>
            );
          })}
        </div>
      </Styles.Expertise>
    </Styles.AboutContainer>
  );
}

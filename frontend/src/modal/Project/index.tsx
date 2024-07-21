import { useState } from 'react';
import { GitHub, Tv } from '@mui/icons-material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { ProjectModalProps } from '../../@types/Projects';

import { Body, ImageContainer, Table, Row, Description, Tag } from './styles';

export function ProjectModal({ project }: ProjectModalProps) {
  const [isListInhover, setIsListInHover] = useState<boolean>(false);
  const [isItemInHover, setIsItemInHover] = useState<string | null>(null);

  function handleMouseEnterList(listInHover: boolean) {
    setIsListInHover(listInHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setIsItemInHover(itemId);
  }

  return (
    <Body>
      <div className="bodyDirectionRow">
        <ImageContainer $background={project.image} />

        <div className="bodyInfo">
          <h2>{project.name}</h2>
          <div className="projectTechs">
            {project.technologies.map((tech, index) => {
              return <Tag key={index}>{tech}</Tag>;
            })}
          </div>

          <Table
            onMouseEnter={() => handleMouseEnterList(true)}
            onMouseLeave={() => handleMouseEnterList(false)}
          >
            <tbody>
              <Row
                $isListInHover={isListInhover}
                $isItemInHover={isItemInHover === 'url'}
                onMouseEnter={() => handleMouseEnterItem('url')}
                onMouseLeave={() => handleMouseEnterItem(null)}
              >
                <th>URL</th>
                <td>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <div className="rowLinkIcon">
                      Check here <Tv fontSize="large" />
                    </div>
                  </a>
                </td>
              </Row>

              <Row
                $isListInHover={isListInhover}
                $isItemInHover={isItemInHover === 'urlRepository'}
                onMouseEnter={() => handleMouseEnterItem('urlRepository')}
                onMouseLeave={() => handleMouseEnterItem(null)}
              >
                <th>Repository</th>
                <td>
                  <a
                    href={project.urlRepository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rowLinkIcon">
                      Check here <GitHub fontSize="large" />
                    </div>
                  </a>
                </td>
              </Row>

              <Row
                $isListInHover={isListInhover}
                $isItemInHover={isItemInHover === 'createdAt'}
                onMouseEnter={() => handleMouseEnterItem('createdAt')}
                onMouseLeave={() => handleMouseEnterItem(null)}
              >
                <th>Created At</th>
                <td>
                  {format(new Date(project.createdAt), 'dd/MM/yyyy', {
                    locale: ptBR,
                  })}
                </td>
              </Row>
            </tbody>
          </Table>
        </div>
      </div>

      <Description>{project.description}</Description>
    </Body>
  );
}

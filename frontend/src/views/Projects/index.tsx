import { useEffect, useState } from 'react';
import { GitHub, Tv } from '@mui/icons-material';

import { TitleContentPage } from '../../components/TitleContentPage';
import { Filter } from '../../components/Filter';
import { Loading } from '../../components/Loading';
import { Modal } from '../../components/Modal';
import { ProjectModal } from '../../modal/Project';

import { ProjectType, ProjectTypeFromApi } from '../../@types/Projects';
import { getIndexMap, setBorderColor } from '../../utils/Functions';

import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [itemInHover, setItemInHover] = useState<string | null>(null);
  const [projectsFiltered, setProjectsFiltered] = useState<ProjectType[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  const username = 'marcusviniciusmo';
  const page = 1;

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((project: ProjectTypeFromApi) => ({
          id: project.id,
          name: project.name,
          description: project.description,
          image: `https://github.com/${username}/${project.name}/raw/master/_screenshots/_image_code.png`,
          url: '',
          urlRepository: project.html_url,
          createdAt: project.created_at,
          technologies: project.topics,
        }));

        formattedData.sort(
          (a: ProjectType, b: ProjectType) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

        setProjects(formattedData);
      });
  }, [username]);

  useEffect(() => {
    const map = getIndexMap(projects);

    setIndexMap(map);
  }, [projects]);

  function selectProject(project: ProjectType | null) {
    setSelectedProject(project);
  }

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  function handleMouseEnterList(isInHover: boolean) {
    setIsListInHover(isInHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setItemInHover(itemId);
  }

  return (
    <Styles.ProjectsContainer>
      <TitleContentPage title="Projects" />

      <Filter list={projects} setListFiltered={setProjectsFiltered} />

      {projects.length > 0 ? (
        <>
          <div
            className="projectsContainer"
            onMouseEnter={() => handleMouseEnterList(true)}
            onMouseLeave={() => handleMouseEnterList(false)}
          >
            {projectsFiltered.map((project) => {
              return (
                <Styles.Project
                  key={project.id}
                  $borderColor={getBorderColor(project.id)}
                  $isListInHover={isListInHover}
                  $isItemInHover={itemInHover === project.id}
                  onClick={() => selectProject(project)}
                  onMouseEnter={() => handleMouseEnterItem(project.id)}
                  onMouseLeave={() => handleMouseEnterItem(null)}
                >
                  <Styles.ImageContainer>
                    <img src={project.image} alt="" />
                  </Styles.ImageContainer>

                  <Styles.Name>{project.name}</Styles.Name>

                  <div className="links">
                    <Styles.Repository
                      href={project.urlRepository}
                      target="_blank"
                    >
                      <GitHub fontSize="large" titleAccess="View Repository" />
                    </Styles.Repository>

                    <Styles.Url href={project.url} target="_blank">
                      <Tv fontSize="large" titleAccess="View Project" />
                    </Styles.Url>
                  </div>
                </Styles.Project>
              );
            })}
          </div>

          {selectedProject && (
            <Modal title="Project" toggleModal={() => selectProject(null)}>
              <ProjectModal project={selectedProject} />
            </Modal>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Styles.ProjectsContainer>
  );
}

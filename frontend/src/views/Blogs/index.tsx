import { useEffect, useState } from 'react';

import { TitleContentPage } from '../../components/TitleContentPage';
import { Filter } from '../../components/Filter';

import { BlogType, BlogsImagesMap } from '../../@types/Blogs';
import { getIndexMap, setBorderColor } from '../../utils/Functions';

import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function Blogs() {
  const [blogsList, setBlogsList] = useState<BlogType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [itemInHover, setItemInHover] = useState<string | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());
  const [blogsFiltered, setBlogsFiltered] = useState<BlogType[]>(blogsList);

  useEffect(() => {
    const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
    const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

    setIsLoading(true);

    fetch(`${baseUrlApi}/blogs/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogsList(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const map = getIndexMap(blogsList);

    setIndexMap(map);
  }, [blogsList]);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  function handleMouseEnterList(isHover: boolean) {
    setIsListInHover(isHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setItemInHover(itemId);
  }

  return (
    <Styles.BlogsContainer>
      <TitleContentPage title="Blogs" />

      <Filter list={blogsList} setListFiltered={setBlogsFiltered} />

      <div
        className="blogsContainer"
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {isLoading ? (
          <Styles.BlogSkeleton />
        ) : (
          <>
            {blogsFiltered
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((blog) => {
                return (
                  <Styles.Blog
                    key={blog.id}
                    title={blog.name}
                    $borderColor={getBorderColor(blog.id)}
                    $isListInHover={isListInHover}
                    $isItemInHover={blog.id === itemInHover}
                    onMouseEnter={() => handleMouseEnterItem(blog.id)}
                    onMouseLeave={() => handleMouseEnterItem(null)}
                  >
                    <Styles.ImageContainer>
                      <img src={BlogsImagesMap[blog.image]} alt="" />
                    </Styles.ImageContainer>

                    <Styles.Link href={blog.url} target="_blank">
                      <Styles.Name>{blog.name}</Styles.Name>
                    </Styles.Link>
                  </Styles.Blog>
                );
              })}
          </>
        )}
      </div>
    </Styles.BlogsContainer>
  );
}

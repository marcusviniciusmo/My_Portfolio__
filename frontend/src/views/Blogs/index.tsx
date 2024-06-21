import { useEffect, useState } from 'react';

import { TitleContentPage } from '../../components/TitleContentPage';

import { BlogsList } from '../../data/blogs';
import { BlogType } from '../../@types/Blogs';
import { getIndexMap, setBorderColor } from '../../utils/Functions';

import { borderColors } from '../../styles/global';
import { BlogsContainer, Blog, ImageContainer, Name, Link } from './styles';

export function Blogs() {
  const [blogsList, setBlogsList] = useState<BlogType[]>(BlogsList);
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [itemInHover, setItemInHover] = useState<string | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    setBlogsList(BlogsList);
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
    <BlogsContainer>
      <TitleContentPage title="Blogs" />

      <div
        className="blogsContainer"
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {blogsList.map((blog) => {
          return (
            <Blog
              key={blog.id}
              title={blog.name}
              $borderColor={getBorderColor(blog.id)}
              $isListInHover={isListInHover}
              $isItemInHover={blog.id === itemInHover}
              onMouseEnter={() => handleMouseEnterItem(blog.id)}
              onMouseLeave={() => handleMouseEnterItem(null)}
            >
              <ImageContainer>
                <img src={blog.image} alt="" />
              </ImageContainer>

              <Link href={blog.url} target="_blank">
                <Name>{blog.name}</Name>
              </Link>
            </Blog>
          );
        })}
      </div>
    </BlogsContainer>
  );
}

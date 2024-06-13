import { useEffect, useState } from 'react';
import { TitleContentPage } from '../TitleContentPage';
import { BlogsList, BlogsListType } from '../../data/blogs';
import {
  BlogsContainer,
  BlogContainer,
  ImageContainer,
  ImageBlog,
  Name,
  LinkBlog,
  borderColors,
} from './styles';

export function Blogs() {
  const [blogsList, setBlogsList] = useState<BlogsListType[]>(BlogsList);
  const [hashIndexMap, setHashIndexMap] = useState<Map<string, number>>(
    new Map(),
  );

  useEffect(() => {
    setBlogsList(BlogsList);
  }, []);

  useEffect(() => {
    const map = new Map<string, number>();

    blogsList.forEach((image, index) => {
      map.set(image.id, index);
    });

    setHashIndexMap(map);
  }, [blogsList]);

  return (
    <div className="contentContainer">
      <TitleContentPage title="Blogs" $left="12.8" />
      <BlogsContainer>
        {blogsList.map((blog) => {
          return (
            <BlogContainer
              key={blog.id}
              title={blog.name}
              $borderColor={
                borderColors[hashIndexMap.get(blog.id)! % borderColors.length]
              }
            >
              <ImageContainer>
                <ImageBlog src={blog.image} />
              </ImageContainer>
              <LinkBlog href={blog.url} target="_blank">
                <Name>{blog.name}</Name>
              </LinkBlog>
            </BlogContainer>
          );
        })}
      </BlogsContainer>
    </div>
  );
}

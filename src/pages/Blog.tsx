import { FC } from 'react';

interface BlogInterface {
  name: string;
  isAge: boolean;
  ages: (number | string)[];
}

const Blog: FC<BlogInterface> = (props) => {
  const { name, isAge, ages } = props;
  return (
    <>
      {name} {isAge}
      {ages.map((age) => (
        <>{age}</>
      ))}
    </>
  );
};

export default Blog;

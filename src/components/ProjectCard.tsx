interface Props {
  title: string;
  content: string;
}

export const ProjectCard = (props: Props) => {
  return (
    <>
      {props.title} {props.content}
    </>
  );
};

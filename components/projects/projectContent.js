import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const ProjectContent = (props) => {
  const { project } = props;
  console.log(props);
  const content = project.content;

  return (
    <div>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
};

export default ProjectContent;

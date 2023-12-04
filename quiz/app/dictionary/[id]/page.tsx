const Article = ({ params }: { params: { id: string } }) => {
  return <div>Article {params.id}</div>;
};

export default Article;

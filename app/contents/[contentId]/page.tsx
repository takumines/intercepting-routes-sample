const ContentDetailPage = ({
  params: { contentId },
}: {
  params: { contentId: string };
}) => {
  return (
    <div className="mx-auto mt-[120px] bg-green-400 w-[500px] h-[500px] rounded-3xl">
      <h1 className="text-[52px] text-center">Content Detail Page</h1>
      <p className="text-center text-[32px] mt-4">Content ID: {contentId}</p>
    </div>
  );
};

export default ContentDetailPage;

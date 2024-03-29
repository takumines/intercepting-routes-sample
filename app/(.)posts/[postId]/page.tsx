const PostDetailPage = ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  return (
    <div className="mt-[120px] bg-red-500">
      <h1 className="text-center text-[52px]">Post Detail Page</h1>
      <p className="text-center text-[32px] mt-4">Post ID: {postId}</p>
    </div>
  );
};

export default PostDetailPage;

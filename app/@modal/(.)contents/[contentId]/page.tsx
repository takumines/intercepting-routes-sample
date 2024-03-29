import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/router";
import Modal from "@/app/@modal/(.)contents/[contentId]/_components/modal";

const ContentDetailPage = ({
  params: { contentId },
}: {
  params: { contentId: string };
}) => {
  return (
    <Modal>
      <div className="mx-auto bg-pink-400 w-[500px] h-[500px] rounded-3xl">
        <h1 className="text-[52px] text-center">Content Detail Page</h1>
        <p className="text-center text-[32px] mt-4">Content ID: {contentId}</p>
      </div>
    </Modal>
  );
};

export default ContentDetailPage;

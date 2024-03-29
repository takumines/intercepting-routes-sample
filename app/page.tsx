import Link from "next/link";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const Page = () => {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      <section>
        <h1 className="text-4xl text-center mt-8">Intercepting Routes</h1>
        <div className="grid grid-cols-3 p-4 gap-4 text-center text-3xl">
          {photos.map((id) => (
            <Link className="bg-gray-500 p-6" href={`/posts/${id}`} key={id}>
              {id}
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-4xl text-center mt-8">
          Intercepting Routes + Parallel Routes
        </h1>
        <div className="grid grid-cols-3 p-4 gap-4 text-center text-3xl">
          {photos.map((id) => (
            <Dialog>
              <DialogTrigger asChild>
                <Link
                  className="bg-yellow-200 p-6"
                  href={`/contents/${id}`}
                  key={id}
                >
                  {id}
                </Link>
              </DialogTrigger>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;

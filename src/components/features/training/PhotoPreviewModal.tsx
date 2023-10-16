import { Transition, Dialog } from "@headlessui/react";
import { Models } from "appwrite";
import { Fragment, FunctionComponent } from "react";

type PhotoPreviewModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  files?: Models.FileList;
};

export const PhotoPreviewModal: FunctionComponent<PhotoPreviewModalProps> = ({
  open,
  setOpen,
  files,
}) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center p-20 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[50rem] h-full transform overflow-clip rounded-lg align-middle transition-all">
                  <div className="h-full">
                    {/* {JSON.stringify(files)} */}
                    {/* <Image
                      src={files[0].}
                      alt="preview"
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                    /> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

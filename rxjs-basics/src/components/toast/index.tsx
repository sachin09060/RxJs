import { useEffect } from "react";
import ToastTheme from "./toast.enum";
import { ToastProps } from "./toast.props";
// import { FaCheckCircle } from "react-icons/fa";
// import { RxCrossCircled } from "react-icons/rx";
// import { FaCircleInfo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Toast = (props: ToastProps) => {
  const { isOpen, message, type, onToastClose } = props;

  useEffect(() => {
    setTimeout(() => {
      onToastClose();
    }, 5000);
    toastTypeCheck();
  }, [isOpen]);

  const toastTypeCheck = () => {
    if (type === ToastTheme.SUCCESS) {
      return "bg-[#E1FFED] border-l-[#5D905B] border-[#B4DDC5] text-[#1E8549]";
    } else if (type === ToastTheme.ERROR) {
      return "bg-[#FFECEA] border-l-[#C36358] border-[#EAC6C2] text-[#B61300]";
    } else if (type === ToastTheme.INFO) {
      return "bg-[#E9F7FF] border-l-[#6C91A7] border-[#ADCCDD] text-[#276198]";
    }
  };

  return (
    <>
      {isOpen ? (
        <div
          className={`fixed left-[50%] bottom-7 translate-y-[0] translate-x-[-50%] items-center flex justify-center z-[1500] w-full h-[40px]`}
        >
          <div
            className={`pr-2 pl-3 py-2 text-[14px] min-w-[500px] border border-l-4 ${toastTypeCheck()} shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* <div>
                  {" "}
                  {type === ToastTheme.SUCCESS ? (
                    <FaCheckCircle size={20} />
                  ) : type === ToastTheme.INFO ? (
                    <FaCircleInfo size={20} />
                  ) : (
                    <RxCrossCircled size={20} />
                  )}
                </div> */}
                <div>{message}</div>
              </div>
              <div className="cursor-pointer" onClick={onToastClose}>
                <RxCross2 size={20} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Toast;

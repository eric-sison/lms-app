import { MimeTypes } from "@lms/utils/enums/mimeTypes";
import Image from "next/image";
import { FunctionComponent } from "react";

type FileThumbnailProps = {
  mimeType: string;
  photoUrl?: string;
};

export const FileThumbnail: FunctionComponent<FileThumbnailProps> = ({
  mimeType,
  photoUrl,
}) => {
  return (
    <>
      {mimeType === MimeTypes.PDF && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          className="w-full h-full shrink-0"
        >
          <path
            fill="#909090"
            d="m24.1 2.072l5.564 5.8v22.056H8.879V30h20.856V7.945L24.1 2.072"
          ></path>
          <path fill="#f4f4f4" d="M24.031 2H8.808v27.928h20.856V7.873L24.03 2"></path>
          <path fill="#7a7b7c" d="M8.655 3.5h-6.39v6.827h20.1V3.5H8.655"></path>
          <path fill="#dd2025" d="M22.472 10.211H2.395V3.379h20.077v6.832"></path>
          <path
            fill="#464648"
            d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2.042 2.042 0 0 0 .647-.117a1.427 1.427 0 0 0 .493-.291a1.224 1.224 0 0 0 .335-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.409-.104a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.671-2.306c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.08-3.915H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"
          ></path>
          <path
            fill="#dd2025"
            d="M21.781 20.255s3.188-.578 3.188.511s-1.975.646-3.188-.511Zm-2.357.083a7.543 7.543 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14.216 14.216 0 0 0 1.658 2.252a13.033 13.033 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.787 10.787 0 0 1-.517 2.434a4.426 4.426 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444c-.003.001-1.576 3.056-2.6 2.444ZM25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14.228 14.228 0 0 0-2.453.173a12.542 12.542 0 0 1-2.012-2.655a11.76 11.76 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.309 9.309 0 0 0 .665 2.338s-.425 1.323-.987 2.639s-.946 2.006-.946 2.006a9.622 9.622 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945c.374.508 1.683.623 2.853-.91a22.549 22.549 0 0 0 1.7-2.492s1.784-.489 2.339-.623s1.226-.24 1.226-.24s1.629 1.639 3.2 1.581s1.495-.939 1.485-1.035"
          ></path>
          <path fill="#909090" d="M23.954 2.077V7.95h5.633l-5.633-5.873Z"></path>
          <path fill="#f4f4f4" d="M24.031 2v5.873h5.633L24.031 2Z"></path>
          <path
            fill="#fff"
            d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2.042 2.042 0 0 0 .647-.117a1.428 1.428 0 0 0 .493-.291a1.224 1.224 0 0 0 .332-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.411-.105a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.67-2.306c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.077-3.915h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"
          ></path>
        </svg>
      )}

      {mimeType === MimeTypes.DOCX && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="vscodeIconsFileTypeWord0"
              x1="4.494"
              x2="13.832"
              y1="-1712.086"
              y2="-1695.914"
              gradientTransform="translate(0 1720)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2368c4"></stop>
              <stop offset=".5" stopColor="#1a5dbe"></stop>
              <stop offset="1" stopColor="#1146ac"></stop>
            </linearGradient>
          </defs>
          <path
            fill="#41a5ee"
            d="M28.806 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5l11.069 3.25L30 9.5V4.191A1.192 1.192 0 0 0 28.806 3Z"
          ></path>
          <path fill="#2b7cd3" d="M30 9.5H8.512V16l11.069 1.95L30 16Z"></path>
          <path fill="#185abd" d="M8.512 16v6.5l10.418 1.3L30 22.5V16Z"></path>
          <path
            fill="#103f91"
            d="M9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5H8.512v5.309A1.192 1.192 0 0 0 9.705 29Z"
          ></path>
          <path
            d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z"
            opacity=".1"
          ></path>
          <path
            d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
            opacity=".2"
          ></path>
          <path
            d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
            opacity=".2"
          ></path>
          <path
            d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
            opacity=".2"
          ></path>
          <path
            fill="url(#vscodeIconsFileTypeWord0)"
            d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"
          ></path>
          <path
            fill="#fff"
            d="M6.9 17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3 5.326a7.761 7.761 0 0 1 .162 1h.022a7.6 7.6 0 0 1 .135-.975l1.039-5.358h1.477l-1.824 7.748h-1.727l-1.237-5.126q-.054-.222-.122-.578t-.084-.52h-.021q-.021.189-.084.561c-.042.249-.075.432-.1.552L7.78 19.871H6.024L4.19 12.127h1.5l1.131 5.418a4.469 4.469 0 0 1 .079.443Z"
          ></path>
        </svg>
      )}

      {(mimeType === MimeTypes.CSV ||
        mimeType === MimeTypes.XLSX ||
        mimeType === MimeTypes.XLS) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="vscodeIconsFileTypeExcel0"
              x1="4.494"
              x2="13.832"
              y1="-2092.086"
              y2="-2075.914"
              gradientTransform="translate(0 2100)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#18884f"></stop>
              <stop offset=".5" stopColor="#117e43"></stop>
              <stop offset="1" stopColor="#0b6631"></stop>
            </linearGradient>
          </defs>
          <path
            fill="#185c37"
            d="M19.581 15.35L8.512 13.4v14.409A1.192 1.192 0 0 0 9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5Z"
          ></path>
          <path
            fill="#21a366"
            d="M19.581 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z"
          ></path>
          <path fill="#107c41" d="M8.512 9.5h11.069V16H8.512Z"></path>
          <path
            d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z"
            opacity=".1"
          ></path>
          <path
            d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
            opacity=".2"
          ></path>
          <path
            d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
            opacity=".2"
          ></path>
          <path
            d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
            opacity=".2"
          ></path>
          <path
            fill="url(#vscodeIconsFileTypeExcel0)"
            d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"
          ></path>
          <path
            fill="#fff"
            d="m5.7 19.873l2.511-3.884l-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359 3.84l2.419 3.905h-1.809l-1.45-2.711A2.355 2.355 0 0 1 9.2 16.8h-.024a1.688 1.688 0 0 1-.168.351l-1.493 2.722Z"
          ></path>
          <path
            fill="#33c481"
            d="M28.806 3h-9.225v6.5H30V4.191A1.192 1.192 0 0 0 28.806 3Z"
          ></path>
          <path fill="#107c41" d="M19.581 16H30v6.5H19.581Z"></path>
        </svg>
      )}

      {mimeType === MimeTypes.PPT && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="vscodeIconsFileTypePowerpoint0"
              x1="4.494"
              x2="13.832"
              y1="-1748.086"
              y2="-1731.914"
              gradientTransform="translate(0 1756)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ca4c28"></stop>
              <stop offset=".5" stopColor="#c5401e"></stop>
              <stop offset="1" stopColor="#b62f14"></stop>
            </linearGradient>
          </defs>
          <path
            fill="#ed6c47"
            d="M18.93 17.3L16.977 3h-.146A12.9 12.9 0 0 0 3.953 15.854V16Z"
          ></path>
          <path
            fill="#ff8f6b"
            d="M17.123 3h-.146v13l6.511 2.6L30 16v-.146A12.9 12.9 0 0 0 17.123 3Z"
          ></path>
          <path
            fill="#d35230"
            d="M30 16v.143A12.905 12.905 0 0 1 17.12 29h-.287a12.907 12.907 0 0 1-12.88-12.857V16Z"
          ></path>
          <path
            d="M17.628 9.389V23.26a1.2 1.2 0 0 1-.742 1.1a1.16 1.16 0 0 1-.45.091H7.027a10.08 10.08 0 0 1-.521-.65a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85a8.82 8.82 0 0 1 .456-.65h9.93a1.2 1.2 0 0 1 1.192 1.189Z"
            opacity=".1"
          ></path>
          <path
            d="M16.977 10.04v13.871a1.15 1.15 0 0 1-.091.448a1.2 1.2 0 0 1-1.1.741H7.62q-.309-.314-.593-.65a10.08 10.08 0 0 1-.521-.65a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85h9.735a1.2 1.2 0 0 1 1.192 1.19Z"
            opacity=".2"
          ></path>
          <path
            d="M16.977 10.04v12.571a1.2 1.2 0 0 1-1.192 1.189H6.506a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85h9.735a1.2 1.2 0 0 1 1.192 1.19Z"
            opacity=".2"
          ></path>
          <path
            d="M16.326 10.04v12.571a1.2 1.2 0 0 1-1.192 1.189H6.506a12.735 12.735 0 0 1-2.553-7.657v-.286A12.705 12.705 0 0 1 6.05 8.85h9.084a1.2 1.2 0 0 1 1.192 1.19Z"
            opacity=".2"
          ></path>
          <path
            fill="url(#vscodeIconsFileTypePowerpoint0)"
            d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"
          ></path>
          <path
            fill="#fff"
            d="M9.293 12.028a3.287 3.287 0 0 1 2.174.636a2.27 2.27 0 0 1 .756 1.841a2.555 2.555 0 0 1-.373 1.376a2.49 2.49 0 0 1-1.059.935a3.607 3.607 0 0 1-1.591.334H7.687v2.8H6.141v-7.922ZM7.686 15.94h1.331a1.735 1.735 0 0 0 1.177-.351a1.3 1.3 0 0 0 .4-1.025q0-1.309-1.525-1.31H7.686v2.686Z"
          ></path>
        </svg>
      )}

      {mimeType === MimeTypes.TXT && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          className="w-full h-full"
        >
          <path
            fill="#c2c2c2"
            d="M22.038 2H6.375a1.755 1.755 0 0 0-1.75 1.75v24.5A1.755 1.755 0 0 0 6.375 30h19.25a1.755 1.755 0 0 0 1.75-1.75V6.856Zm.525 2.844l1.663 1.531h-1.663ZM6.375 28.25V3.75h14.438v4.375h4.813V28.25Z"
          ></path>
          <path
            fill="#829ec2"
            d="M8.125 15.097h13.076v1.75H8.125zm0 9.342h9.762v1.75H8.125zm0-4.676h15.75v1.75H8.125zm0-9.533h15.75v1.75H8.125z"
          ></path>
        </svg>
      )}

      {(mimeType === MimeTypes.PNG || mimeType === MimeTypes.JPEG) && (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   width="1em"
        //   height="1em"
        //   viewBox="0 0 32 32"
        //   className="w-full h-full"
        // >
        //   <path fill="#2dcc9f" d="M30 5.851v20.298H2V5.851h28"></path>
        //   <path
        //     fill="#fff"
        //     d="M24.232 8.541a2.2 2.2 0 1 0 1.127.623a2.212 2.212 0 0 0-1.127-.623M18.111 20.1q-2.724-3.788-5.45-7.575L4.579 23.766h10.9q1.316-1.832 2.634-3.663M22.057 16q-2.793 3.882-5.584 7.765h11.169Q24.851 19.882 22.057 16Z"
        //   ></path>
        // </svg>
        <Image
          src={photoUrl ?? "/"}
          alt="thumbnail"
          width={250}
          height={250}
          className="h-full w-full object-cover"
        />
      )}
    </>
  );
};

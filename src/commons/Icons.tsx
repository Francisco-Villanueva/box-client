interface IconProps {
  className?: string;
}
const iconStyle = "text-darkGreen";
export function ArrowLeft({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} ${iconStyle}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}
export function ChcekIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} ${iconStyle}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
export function ShortArrowIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} ${iconStyle}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}
export function CameraIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 33 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${iconStyle}`}
    >
      <path
        d="M22 16H12"
        stroke="#24424D"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M17 11L17 21"
        stroke="#24424D"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M26.7333 10.9333H25.2"
        stroke="#24424D"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 17.1212C1 12.3546 1 9.97122 2.16099 8.25916C2.66359 7.51799 3.30943 6.88162 4.06163 6.38639C5.17811 5.65132 6.57587 5.38858 8.71589 5.29467C9.73712 5.29467 10.6164 4.53217 10.8167 3.54545C11.1171 2.06538 12.436 1 13.9678 1H19.0322C20.564 1 21.8829 2.06538 22.1833 3.54545C22.3836 4.53217 23.2629 5.29467 24.2841 5.29467C26.4241 5.38858 27.8219 5.65132 28.9384 6.38639C29.6906 6.88162 30.3364 7.51799 30.839 8.25916C32 9.97122 32 12.3546 32 17.1212C32 21.8879 32 24.2712 30.839 25.9833C30.3364 26.7244 29.6906 27.3608 28.9384 27.856C27.2008 29 24.782 29 19.9444 29H13.0556C8.21796 29 5.79917 29 4.06163 27.856C3.30943 27.3608 2.66359 26.7244 2.16099 25.9833C1.83307 25.4997 1.59777 24.9626 1.42893 24.3333"
        stroke="#24424D"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
export function BoxIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${iconStyle}`}
    >
      <path
        d="M29.9812 15.6C29.9368 14.0267 29.7872 13.0237 29.2831 12.1677C28.5662 10.9503 27.2752 10.2728 24.6932 8.91782L22.2933 7.65836C20.1865 6.55279 19.1331 6 18 6C16.8669 6 15.8135 6.55279 13.7067 7.65836L11.3068 8.91782C8.72475 10.2728 7.43375 10.9503 6.71688 12.1677C6 13.3851 6 14.9 6 17.9298V18.0702C6 21.1 6 22.6149 6.71688 23.8323C7.43375 25.0497 8.72475 25.7272 11.3068 27.0822L13.7067 28.3416C15.8135 29.4472 16.8669 30 18 30C19.1331 30 20.1865 29.4472 22.2933 28.3416L24.6932 27.0822C27.2752 25.7272 28.5662 25.0497 29.2831 23.8323C29.7872 22.9763 29.9368 21.9733 29.9812 20.4"
        stroke="#24424D"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M28.8 12.6L24 15M18 18L7.20001 12.6M18 18V29.4M18 18C18 18 21.2912 16.3544 23.4 15.3C23.6343 15.1828 24 15 24 15M24 15V19.2M24 15L12.6 9"
        stroke="#24424D"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function TrashIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} ${iconStyle}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}
export function EyeIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} ${iconStyle}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
export function NotEyeIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} ${iconStyle}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}
export function PenIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} ${iconStyle}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

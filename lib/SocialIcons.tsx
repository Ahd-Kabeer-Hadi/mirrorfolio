import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ahd-kabeer/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <g clipPath="url(#LinkedIn_svg__a)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21.335 24H2.67a2.667 2.667 0 0 1-2.667-2.667V2.667A2.667 2.667 0 0 1 2.669 0h18.666a2.667 2.667 0 0 1 2.667 2.667v18.666A2.667 2.667 0 0 1 21.335 24Zm-4.23-3.333h3.562V13.35c0-3.095-1.755-4.592-4.206-4.592-2.452 0-3.484 1.91-3.484 1.91V9.11H9.545v11.556h3.432V14.6c0-1.626.748-2.593 2.18-2.593 1.317 0 1.949.93 1.949 2.593v6.066ZM3.335 5.466c0 1.177.947 2.132 2.116 2.132 1.17 0 2.116-.955 2.116-2.132A2.124 2.124 0 0 0 5.45 3.333c-1.169 0-2.116.955-2.116 2.133Zm3.923 15.2H3.678V9.112h3.58v11.556Z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="LinkedIn_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    href: "https://twitter.com/Ahd_Kabeerpi",
    icon: (
      <svg
        className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="transparent" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    href: "https://github.com/Ahd-Kabeer-Hadi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <g clipPath="url(#a)">
          <g clipPath="url(#b)">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.964 0C5.348 0 0 5.388 0 12.053c0 5.328 3.427 9.838 8.18 11.434.595.12.813-.259.813-.578 0-.28-.02-1.237-.02-2.235-3.328.718-4.02-1.437-4.02-1.437-.536-1.397-1.328-1.756-1.328-1.756-1.09-.738.08-.738.08-.738 1.207.08 1.841 1.237 1.841 1.237 1.07 1.836 2.793 1.317 3.487.998.099-.779.416-1.317.752-1.617-2.654-.28-5.447-1.317-5.447-5.947 0-1.317.475-2.394 1.228-3.232-.119-.3-.535-1.537.12-3.193 0 0 1.01-.32 3.287 1.237.975-.264 1.981-.398 2.991-.4 1.01 0 2.04.14 2.991.4 2.278-1.557 3.288-1.237 3.288-1.237.654 1.656.238 2.894.12 3.193.772.838 1.227 1.915 1.227 3.232 0 4.63-2.792 5.648-5.467 5.947.436.38.812 1.098.812 2.235 0 1.617-.02 2.914-.02 3.313 0 .32.219.698.813.579a12.044 12.044 0 0 0 8.18-11.435C23.929 5.388 18.56 0 11.965 0Z"
              clipRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
          <clipPath id="b">
            <path fill="#fff" d="M0 0h24v23.51H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    href: "https://www.figma.com/@kabeerhadi",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#F1F4FC"/>
        <path d="M12.5 12C12.5 11.2928 12.7897 10.6145 13.3055 10.1144C13.8212 9.61433 14.5207 9.33337 15.25 9.33337C15.9793 9.33337 16.6788 9.61433 17.1945 10.1144C17.7103 10.6145 18 11.2928 18 12C18 12.7073 17.7103 13.3856 17.1945 13.8857C16.6788 14.3858 15.9793 14.6667 15.25 14.6667C14.5207 14.6667 13.8212 14.3858 13.3055 13.8857C12.7897 13.3856 12.5 12.7073 12.5 12V12Z" stroke="#0D0D0D" strokeWidth="1.5"/>
        <path d="M7 17.3333C7 16.626 7.28973 15.9478 7.80546 15.4477C8.32118 14.9476 9.02065 14.6666 9.75 14.6666H12.5V17.3333C12.5 18.0405 12.2103 18.7188 11.6945 19.2189C11.1788 19.719 10.4793 20 9.75 20C9.02065 20 8.32118 19.719 7.80546 19.2189C7.28973 18.7188 7 18.0405 7 17.3333Z" stroke="#0D0D0D" strokeWidth="1.5"/>
        <path d="M12.5 4V9.33333H15.25C15.9793 9.33333 16.6788 9.05238 17.1945 8.55228C17.7103 8.05219 18 7.37391 18 6.66667C18 5.95942 17.7103 5.28115 17.1945 4.78105C16.6788 4.28095 15.9793 4 15.25 4H12.5Z" stroke="#0D0D0D" strokeWidth="1.5"/>
        <path d="M7 6.66667C7 7.37391 7.28973 8.05219 7.80546 8.55228C8.32118 9.05238 9.02065 9.33333 9.75 9.33333H12.5V4H9.75C9.02065 4 8.32118 4.28095 7.80546 4.78105C7.28973 5.28115 7 5.95942 7 6.66667Z" stroke="#0D0D0D" strokeWidth="1.5"/>
        <path d="M7 12C7 12.7073 7.28973 13.3856 7.80546 13.8857C8.32118 14.3858 9.02065 14.6667 9.75 14.6667H12.5V9.33337H9.75C9.02065 9.33337 8.32118 9.61433 7.80546 10.1144C7.28973 10.6145 7 11.2928 7 12Z" stroke="#0D0D0D" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export function SocialIcons() {
  return (
    <>
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={link.href}
          className="font-syne font-medium transition-transform transform hover:scale-105"
        >
          {link.icon}
        </Link>
      ))}
    </>
  );
}
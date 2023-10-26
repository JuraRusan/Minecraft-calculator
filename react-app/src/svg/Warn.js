import * as React from "react"
const SvgWarnComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 512 512"
  >
    <title>{props.title}</title>
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M278.313 48.296a42.667 42.667 0 0 1 15.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.667 42.667 0 0 1-21.169 5.621H74.667C51.103 447.343 32 428.241 32 404.677a42.667 42.667 0 0 1 5.622-21.169L220.099 64.172c11.691-20.46 37.755-27.567 58.214-15.876ZM257.144 85.34 74.667 404.677h364.955L257.144 85.34ZM256 314.667c15.238 0 26.667 11.264 26.667 26.624S271.238 367.915 256 367.915c-15.584 0-26.667-11.264-26.667-26.966 0-15.018 11.429-26.282 26.667-26.282Zm21.333-165.334v128h-42.666v-128h42.666Z"
    />
  </svg>
)
export default SvgWarnComponent
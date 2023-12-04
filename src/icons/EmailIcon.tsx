import React from "react"

const EmailIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.29 15.0357L5.47 9.49467L6.415 8.32967L12.29 13.1027L18.163 8.32967L19.109 9.49367L12.29 15.0357ZM1.75 22.0347H22.75V3.03467H1.75V22.0347Z"
        fill="white"
      />
    </svg>
  )
}

export default EmailIcon

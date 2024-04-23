export default function Wind({ size }: { size: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_5_67"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="-1"
                y="0"
                width="23"
                height="23"
            >
                <path d="M22 0H-1V23H22V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_5_67)">
                <path
                    d="M11.3214 0.821429C12.0839 0.821429 12.8152 1.12433 13.3544 1.66349C13.8935 2.20266 14.1964 2.93393 14.1964 3.69643C14.1964 4.45893 13.8935 5.1902 13.3544 5.72937C12.8152 6.26854 12.0839 6.57143 11.3214 6.57143H-0.178574"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18.3036 17.25C19.066 17.25 19.7972 16.9471 20.3364 16.4079C20.8756 15.8688 21.1786 15.1375 21.1786 14.375C21.1786 13.6125 20.8756 12.8812 20.3364 12.3421C19.7972 11.8029 19.066 11.5 18.3036 11.5H2.28571"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.9107 22.1786C11.6732 22.1786 12.4045 21.8756 12.9436 21.3364C13.4828 20.7973 13.7857 20.066 13.7857 19.3036C13.7857 18.5411 13.4828 17.8099 12.9436 17.2707C12.4045 16.7315 11.6732 16.4286 10.9107 16.4286H1.46428"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

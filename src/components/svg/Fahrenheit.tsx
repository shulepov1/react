export default function Fahrenheit({
    size = "14",
    strokeWidth = 1,
}: {
    size: string;
    strokeWidth: number;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_1222_37027)">
                <path
                    d="M2.5 3.5C3.32843 3.5 4 2.82843 4 2C4 1.17157 3.32843 0.5 2.5 0.5C1.67157 0.5 1 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5Z"
                    stroke="black"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7 13.5V1.5H13"
                    stroke="black"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7 7H11"
                    stroke="black"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1222_37027">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default function Celcius({
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
            <path
                d="M2 3.5C2.82843 3.5 3.5 2.82843 3.5 2C3.5 1.17157 2.82843 0.5 2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5Z"
                stroke="black"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.5 3.5C12.0882 2.33481 10.8062 1.5 9.5 1.5C7.84315 1.5 6.5 2.84315 6.5 4.5V10.5C6.5 12.1569 7.84315 13.5 9.5 13.5C10.8062 13.5 12.0882 12.6652 12.5 11.5"
                stroke="black"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

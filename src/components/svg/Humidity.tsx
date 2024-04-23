export default function Humidity({ size }: { size: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.5 3.5C1.75268 2.90152 3.11305 2.56142 4.5 2.5C6.5 2.5 7.5 4 9.5 4C10.8869 3.93858 12.2473 3.59848 13.5 3L11.5 2"
                stroke="white"
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M0.5 7.5C1.75268 6.90152 3.11305 6.56142 4.5 6.5C6.5 6.5 7.5 8 9.5 8C10.8869 7.93858 12.2473 7.59848 13.5 7L11.5 6"
                stroke="white"
                strokeLinecap="round"
                strokeWidth={0.5}
                strokeLinejoin="round"
            />
            <path
                d="M0.5 11.5C1.75268 10.9015 3.11305 10.5614 4.5 10.5C6.5 10.5 7.5 12 9.5 12C10.8869 11.9386 12.2473 11.5985 13.5 11L11.5 10"
                stroke="white"
                strokeLinecap="round"
                strokeWidth={0.5}
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function MoreIcon({color}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 15 15"
        >
            <path className="transition-colors duration-1000" stroke={color} d="M7.5 0v7.5m0 0V15m0-7.5H0m7.5 0H15"></path>
        </svg>
    );
}
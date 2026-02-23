export default function Shimmer() {
    return (
        <div className="shimmer-wrapper">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="shimmer-line"></div>
            ))}
        </div>
    );
}
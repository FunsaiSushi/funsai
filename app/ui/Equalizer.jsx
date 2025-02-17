import "./Equalizer.css";

const Equalizer = ({ size = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M4 4h3.7v8H4z" className="eq-bar eq-bar--1" color="#FFF" />
    <path d="M10.2 4h3.7v16h-3.7z" className="eq-bar eq-bar--2" color="#FFF" />
    <path d="M16.3 4H20v11h-3.7z" className="eq-bar eq-bar--3" color="#FFF" />
  </svg>
);
export default Equalizer;

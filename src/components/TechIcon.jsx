import { techIcons } from "../data/techIcons";

function TechIcon({ name, size = 17 }) {
  const technology = techIcons[name];

  if (!technology) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{
        color: technology.color,
      }}
    >
      <path d={technology.icon.path} />
    </svg>
  );
}

export default TechIcon;

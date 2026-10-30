import { Moon, Sun } from "lucide-react";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseDown={(event) => event.preventDefault()}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-(--color-border)
        bg-(--color-background)
        text-(--color-text-secondary)
        transition-colors
        hover:border-(--color-accent)
        hover:text-(--color-accent)
      "
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export default ThemeToggle;

import { redesIcon } from "../utils/redIcons"

interface Red {
  id: number,
  nombre: string,
  link: string,
  icon: React.JSX.Element,
}

export const redes: Red[] = [
  {
    id: 1,
    nombre: "GitHub",
    link: "https://github.com/SamuelCelisL",
    icon: redesIcon.github
  }
]
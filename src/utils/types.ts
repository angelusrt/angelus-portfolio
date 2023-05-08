type IconType = "Star" | "Plane" | "Speaker" | "Work" | "Arrow" | "Menu"

type TextHrefType = {text: string, href: string}

type CardType = {
  type: string,
  title: string,
  subtitle: string,
  image: string,
  tags: string[],
  buttons: TextHrefType[]
}

export type {IconType, TextHrefType, CardType}
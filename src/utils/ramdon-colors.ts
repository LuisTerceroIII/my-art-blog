const randomColors: string[] = [
  "#d2d2ad",
  "#bfa9a1",
  "#FFFFE0",
  "#c5c5b3",
  "#b6c5b3",
  "#8fb4aaed",
  "#4799aeed",
  "#11b0d9ed",
  "#e5bbeced",
  "#ecbbbbed",
  "#e68484ed",
  "#bebbbb",
  "#6d907f",
  "#77b295",
  "#8ab39f",
  "#7b93ad",
  "#ad8f7b",
  "#ca8f68",
  "#b778a2",
  "#bd96b0",
  "#a4bd96",
  "#bdbd96",
  "#949472",
  "#b16d6d",
]

export function getRandomBackgroundColor(): string {
    const randomIndex = Math.floor(Math.random() * randomColors.length)
    const randomColor = randomColors[randomIndex]
    return randomColor
  }
  
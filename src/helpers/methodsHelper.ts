export function setStyleVariable(name: string, value: string) {
  document.documentElement.style.setProperty(`--${name}`, value)
}

export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export function getInputValue(event: Event) {
  const { value } = event.target as HTMLInputElement

  return value
}

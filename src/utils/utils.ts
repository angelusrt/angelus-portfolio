function remove(ref: HTMLElement, mod: string) {
  ref.classList.remove(ref.classList[0] + mod)
}

function add(ref: HTMLElement, mod: string) {
  ref.classList.add(ref.classList[0] + mod)
}

export {add, remove}


export const useHello = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$hello
}

function useBar() {
  throw new Error("Function not implemented.")
}

import React from "react"
import {createRoot} from "react-dom/client"
import {createInertiaApp} from "@inertiajs/react"
import {InertiaProgress} from "@inertiajs/progress"

InertiaProgress.init()

createInertiaApp({
  resolve: (name: string) => {
    const pages = import.meta.glob("./Pages/**/*.tsx", {eager: true}) as Record<string, any>
    return pages[`./Pages/${name}.tsx`] ?? pages[`./Pages/${name}.jsx`]
  },

  id: "root",

  setup({el, App, props}: {el: string | HTMLElement; App: any; props: any}) {
    let container: HTMLElement | null

    if (typeof el === "string") {
      container = document.getElementById(el)
    } else {
      container = el
    }

    if (!container) throw new Error(`Element with id or reference "${el}" not found`)

    const root = createRoot(container)
    root.render(<App {...props} />)
  },
})

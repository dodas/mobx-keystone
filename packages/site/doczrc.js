// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "mobx-keystone",
  description:
    "A MobX powered state management solution based on data trees with first class support for Typescript, snapshots, patches and much more",
  repository: "https://github.com/xaviergonz/mobx-keystone",
  npm: "https://npmjs.com/package/mobx-keystone",
  apiRef: "/public/api",
  typescript: true,
  propsParser: false,
  menu: [
    "Introduction",
    "Comparison with mobx-state-tree",
    "Class Models",
    "Data Models",
    "Standard and Standalone Actions",
    "Tree-Like Structure",
    "Root Stores",
    "Snapshots",
    "Patches",
    "Maps, Sets, Dates",
    {
      name: "Action Middlewares",
      menu: [
        "onActionMiddleware",
        "transactionMiddleware",
        "undoMiddleware",
        "readonlyMiddleware",
        "Custom Middlewares",
      ],
    },
    "Contexts",
    "References",
    "Frozen Data",
    "Runtime Type Checking",
    "Drafts",
    "Sandboxes",
    "Redux Compatibility",
    { name: "Examples", menu: ["Todo List", "Client/Server"] },
  ],
  themeConfig: {
    mode: "light",
    showDarkModeSwitch: false,
  },
  plugins: [],
}

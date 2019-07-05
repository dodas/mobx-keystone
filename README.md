# mobx-data-model

_A MobX powered state management solution based on data trees with first class support for Typescript, snapshots, patches and much more_

![npm](https://img.shields.io/npm/v/mobx-data-model.svg?style=flat-square&logo=npm)
![license](https://img.shields.io/npm/l/mobx-data-store.svg?style=flat-square)
![types](https://img.shields.io/npm/types/mobx-data-store.svg?style=flat-square&logo=typescript)

![CircleCI](https://img.shields.io/circleci/build/github/xaviergonz/mobx-data-model.svg?style=flat-square&logo=circleci)
![Coveralls github](https://img.shields.io/coveralls/github/xaviergonz/mobx-data-model.svg?style=flat-square&logo=coveralls)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c5f60bcb-c1ff-4d04-ad14-1fc34ddbb429/deploy-status)](https://app.netlify.com/sites/mobx-data-model/deploys)

> ### Full documentation can be found on the site:
>
> ## [mobx-data-model.netlify.com](https://mobx-data-model.netlify.com)

## Introduction

`mobx-data-model` is a state container that combines the _simplicity and ease of mutable data_ with the _traceability of immutable data_ and the _reactiveness and performance of observable data_, all with a fully compatible Typescript syntax.

Simply put, it tries to combine the best features of both immutability (transactionality, traceability and composition) and mutability (discoverability, co-location and encapsulation) based approaches to state management; everything to provide the best developer experience possible.
Unlike MobX itself, `mobx-data-model` is very opinionated about how data should be structured and updated.
This makes it possible to solve many common problems out of the box.

Central in `mobx-data-model` (`mobx-data-model`) is the concept of a _living tree_. The tree consists of mutable, but strictly protected objects (models, arrays and plain objects).
From this living tree, immutable, structurally shared, snapshots are automatically generated.

Another of the core design goals of `mobx-data-model` it to offer a great Typescript syntax out of the box, be it for models (and other kind of data such as plain objects and arrays) or for its generated snapshots.

To see some code and a a glimpse of how it works check the [Todo List Example](https://mobx-data-model.netlify.com/examples/todoList)

Because state trees are living, mutable models, actions are straight-forward to write; just modify local instance properties where appropriate. It is not necessary to produce a new state tree yourself, `mobx-data-model`'s snapshot functionality will derive one for you automatically.

Although mutable sounds scary to some, fear not, actions have many interesting properties.
By default trees can only be modified by using an action that belongs to the same subtree.
Furthermore, actions are replayable and can be used to distribute changes.

Moreover, because changes can be detected on a fine grained level, JSON patches are supported out of the box.
Simply subscribing to the patch stream of a tree is another way to sync diffs with, for example, back-end servers or other clients.

Since `mobx-data-model` uses MobX behind the scenes, it integrates seamlessly with [mobx](https://mobx.js.org) and [mobx-react](https://github.com/mobxjs/mobx-react).
Even cooler, because it supports snapshots, action middlewares and replayable actions out of the box, it is possible to replace a Redux store and reducer with a MobX data model.
This makes it possible to connect the Redux devtools to `mobx-data-model`.

Like React, `mobx-data-model` consists of composable components, called _models_, which captures a small piece of state. They are instantiated from props and after that manage and protect their own internal state (using actions). Moreover, when applying snapshots, tree nodes are reconciled as much as possible.

## Requirements

This library requires a more or less modern Javascript environment to work, namely one with support for:

- Proxies
- Symbols
- WeakMap/WeakSet

In other words, it should work on mostly anything except _it won't work in Internet Explorer_.

If you are using Typescript, then version >= 3.2.4 is recommended, though it _might_ work with older versions.

## Installation

> `npm install mobx-data-model`

> `yarn add mobx-data-model`

## Full documentation

Full documentation can be found on [mobx-data-model.netlify.com](https://mobx-data-model.netlify.com)

# GraphQL Python Tutorial - Frontend

This tutorial will focus on building a GraphQL API using the Python library Graphene with a Django backend as a vehicle for teaching the principals of evolutionary API that can be applied across any tech stack, including REST, as well as the more practical concerns of working with Graphene and designing your API for GraphQL.

The majority of exericses and material for the tutorial is in the [`graphq-python-tutorial` repository][tutorial-backend]. This repository is just a companion of sample frontned code for the more full Python tutorial. See the slides [here][tutorial-slides].

[tutorial-slides]: https://slides.com/dvndrsn/graphql-python-tutorial
[tutorial-backend]: https://github.com/dvndrsn/graphql-python-tutorial

# Getting Started

Before the tutorial begins, please install project prerequisites and perform initial project setup and build.

## Prerequisites

### Node.js 10.15 LTS

Node.js is required to run the frontend code samples from this project. The [latest LTS version 10.15.3][install-node] is recommended for this tutorial.

[install-node]: https://nodejs.org/en/

### GraphQL Python Tutorial - GraphQL API Server

You should have already set up the Python GraphQL API server as described in the [README for the GraphQL Python Tutorial][prerequsite-graphql].

[prerequsite-graphql]: https://github.com/dvndrsn/graphql-python-tutorial

## Initial Setup

Once prerequsites are installed, these instructions can be followed to setup the tutorial code on Linux, OSX and Windows machines.

```
# 0. Install Prerequsites: Python (Target 3.7+), `invoke` and git

# 1. Clone repo
$ git clone https://github.com/dvndrsn/graphql-python-tutorial-frontend.git
$ cd graphql-python-tutorial-frontend

# 2. Checkout Chapter 1
$ git checkout chapter-1

# 3. Setup dependencies (pipenv, graphene, django, etc.) and fixture data (sqlite) using `invoke`
$ npm install

# 4. Check setup
$ npm test

# 5. Start React Dev Server
$ npm start

# 6. Start the Python API (invoke start from the python project)
#      and open the React website in your web browser.
# http://localhost:3000/
```

# Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses the same base scripts.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# References

Reviewing this reference will provide some background on the dependencies used in this tutorial. This can be a jumping off point for a deeper dive into GraphQL and React after the tutorial completes.

## Apollo

We use the starter kit, Apollo Boost, which bundles the core Apollo dependencies in a easy to use development API.

In a project with more specific needs, you may find yourself ejecting from `apollo-boost` to start using individual packages and customize how they're used. See [the docs on Apollo's website][reference-apollo] for more details.

[reference-apollo]: https://www.apollographql.com/docs/react/essentials/get-started#packages

## React

React is used to render a view containing our data. See [the docs][reference-react] for more info about React.

[reference-react]: https://reactjs.org/docs/getting-started.html

## React Router

React Router is used to match URLs, link content and conditioanlly render components based upon the route in React. See the [docs here][reference-react-router].

[reference-react-router]: https://reacttraining.com/react-router/web/guides/quick-start

## React Material UI

Our base components are created using Material UI, a nice set of prebuild React components. See [the docs][reference-react-material] for some demos of components contained here.

[reference-react-material]: https://material-ui.com/demos/app-bar/

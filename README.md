# Substrate dApp Development Toolkit

Welcome to the Substrate dApp Development Toolkit, your ultimate companion for accelerating your blockchain journey! This open-source toolkit has been meticulously crafted to empower developers with a comprehensive set of resources, starter kits, guidelines, and an arsenal of powerful tools. With this toolkit by your side, you can supercharge your development process, enabling you to concentrate on crafting cutting-edge features while significantly reducing your time-to-market.

## Key Features

🌐 **Decentralized Architecture**: Embrace a truly decentralized architecture with an in-browser client approach, minimizing reliance on centralized technologies.

🚀 **Rapid Development Starters**: Jumpstart your project with a variety of pre-configured templates and starter kits tailored for different blockchain use cases.

📖 **Guidelines and Best Practices**: Benefit from battle-tested development strategies, best practices, and guidelines to ensure your project is built to industry standards.

🧰 **Powerful Development Tools**: Access a suite of robust tools and utilities designed to simplify complex blockchain development tasks, allowing you to code with confidence.

🕑 **Faster Time-to-Market**: By leveraging this toolkit, you'll not only streamline your development process but also bring your blockchain-based dApp to market faster, gaining a competitive edge in the rapidly evolving blockchain landscape.

Whether you're a seasoned blockchain developer or just starting your journey, the Substrate dApp Development Toolkit is here to support you every step of the way. Get started today and turn your blockchain ideas into reality with ease and efficiency!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Tech Stack Overview](#tech-stack-overview)
  - [Polkadot, Substrate and Ink](#polkadot-substrate-and-ink)
  - [Smoldot Light Client](#smoldot-light-client)
  - [Polkadot Connect Extension](#polkadot-connect-extension)
  - [PreactJS, Vite and Vitest](#preactjs-vite-and-vitest)
  - [Turbo and pnpm](#turbo-and-pnpm)
  - [Tech Stack References](#tech-stack-references)
    - [dApp Frontend](#dapp-frontend)
    - [Offchain History](#offchain-history)
    - [Development Tools](#development-tools)
    - [Blockchain and Smart Contracts](#blockchain-and-smart-contracts)
- [Directory Structure](#directory-structure)
- [Design System](#design-system)
  - [Design Tokens](#design-tokens)
  - [Shared Components](#shared-components)
- [Layouts](#layouts)
- [Lib](#lib)
- [Services](#services)
- [Hooks](#hooks)
- [Packages](#packages)
- [CI / CD](#ci--cd)
- [Task Manager](#task-manager)
- [Blockchain](#blockchain)
  - [Running a local node](#running-a-local-node)
  - [Developing Smart Contracts](#developing-smart-contracts)
  - [Launching a Parachain](#launching-a-parachain)
- [Coding Style Guidelines](#coding-style-guidelines)
  - [JavaScript Conventions](#javascript-conventions)
  - [React Conventions](#react-conventions)
  - [React State Management](#react-state-management)
    - [Use Preact Signals](#use-preact-signals)
    - [Async State Handling](#async-state-handling)
    - [Group Related State](#group-related-state)
    - [Avoid Redundant State](#avoid-redundant-state)
    - [Minimize Duplication](#minimize-duplication)
    - [Flatten Nested State](#flatten-nested-state)
    - [Keep State Serializable](#keep-state-serializable)
    - [Use Arrays Instead of Maps](#use-arrays-instead-of-maps)
  - [Styling](#styling)
- [Getting Started](#getting-started)
- [Learning Resources](#learning-resources)
  - [Subtrate dApp Video Tutorials](#subtrate-dapp-video-tutorials)
  - [Turborepo](#turborepo)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Tech Stack Overview

- **In-Browser Light Client**: Smoldot provides in-browser light client support, seamlessly integrated through Substrate-Connect.
- **Wallet Integration**: Integration with existing polkadot wallets like Talisman and PolkadotJS extension.
- **Modern Frontend**: Our dapp boilerplates are built with PreactJS, ensuring compliance with Core Web Vitals for optimal user experience.
- **Desing System**: We utilize utility-first CSS with TailwindCSS and offer a customizable design system built on Shadcn/UI.
- **Decentralized Storage**: Enjoy decentralized storage solutions using IPFS with Pinata and Arweave with Blundr integration.
- **Efficient Development**: Our turbo monorepo and pnpm package manager ensure swift and efficient builds.
- **Smart Contract Development**: Smart contract development development environment with all bateries included.
- **GraphQL Offchain Indexers**: Access fast historical data through GraphQL APIs and offchain indexers.
- **GraphQL Code-First Clients**: Easily interact with GraphQL using GenQL for code-first client development with TypeScript support.
- **Utility Toolkit**: Benefit from a curated set of utilities for decimal precision, mathematics, date handling, and data validation.
- **Code Quality Tools**: We include TypeScript, ESLint, and Prettier configurations to maintain high code quality standards.
- **Clean Code Practices**: Our codebase follows an idiomatic, functional, and declarative codestyle.
- **Testing and Deployment Automation**: Simplify your development process with automated testing and deployment utilities.
- **Blockchain Templates**: Explore our decentralized exchange and NFT marketplace templates for rapid blockchain project development.
- **Internationalization**: Out-of-the-box translations support with React-i18next.

### Polkadot, Substrate and Ink

**Polkadot**: Polkadot is a revolutionary blockchain platform that connects multiple blockchains into a single, interoperable network. It enables seamless communication and data transfer between different blockchains, fostering collaboration and innovation while maintaining security and scalability.

**Substrate**: Substrate is a flexible blockchain development framework that empowers developers to create custom, scalable, and secure blockchains with ease. It provides a robust foundation for building decentralized applications (dApps) and allows developers to focus on their unique use cases, accelerating blockchain development and adoption.

**Ink**: Ink is a smart contract development environment specifically tailored for the Polkadot network. It simplifies the creation of highly secure and interoperable smart contracts, allowing developers to harness the full potential of the Polkadot ecosystem. With Ink, you can build decentralized applications and services that seamlessly connect and collaborate across multiple blockchains on the Polkadot network, enabling a new era of blockchain innovation and connectivity.

### Smoldot Light Client

Traditional blockchain networks often rely on centralized infrastructure, such as full nodes and validators. These centralized points of control can introduce vulnerabilities and dependencies. The Smoldot Light Client, by enabling in-browser access to blockchain data, reduces the need for such centralized infrastructure. Users can interact with the blockchain directly from their web browsers, minimizing reliance on a central authority or service provider.

Typically, the nodes that provide peer-to-peer networking for a blockchain require significant resources, including powerful high-speed processors and high-capacity storage devices. By contrast, light client nodes can synchronize data from the blockchain while running in resource-constrained environments and embedded in applications.

With a light client node, you can interact with a blockchain in a secure and decentralized way without investing in the high-powered hardware and network capacity that running a full node would require.

Learn more:

- [Light clients in Substrate Connect](https://docs.substrate.io/learn/light-clients-in-substrate-connect/)
- [Build dApps with Substrate Connect Light Client | Polkadot Hackathon: North America](https://www.youtube.com/live/Pz3laSFMUcg?si=yH7yB3HU6_bYPjw0)

### Polkadot Connect Extension

Parity is developing wallet extension with Smoldot already built-in so dApp can benefit from it without having to implement Substrate Connect on the dApp client. It is preferable to embed the light client in a browser extension as opposed to directly in the dApp so that multiple browser tabs can share the state of a single instance and sync faster.

When this is ready Substrate dApp Toolkit will leverage its sdk to interact with the blockchain.

_coming soon_

### PreactJS, Vite and Vitest

Projects should consider using PreactJS for enhanced performance while maintaining compatibility with ReactJS APIs. PreactJS is a lightweight and efficient alternative to ReactJS that offers several advantages:

1. **Improved Performance**: PreactJS is designed to be extremely fast and lightweight. It accomplishes this by being smaller in size compared to ReactJS, which means faster initial loading times for your applications. Smaller bundle sizes also contribute to quicker runtime performance, making your applications more responsive.

2. **Efficient Virtual DOM**: PreactJS employs a highly optimized virtual DOM (VDOM) implementation. This means that updates to the user interface are computed and applied more efficiently, resulting in faster rendering and improved overall performance.

3. **Compatibility with React APIs**: PreactJS is intentionally designed to be compatible with React's API surface. This compatibility makes it relatively straightforward to port existing React applications or components to Preact without significant code changes. You can leverage the benefits of Preact's performance while keeping your development process familiar.

4. **Community and Ecosystem**: Preact has a growing and active community, and it is well-maintained. While it might not have as extensive an ecosystem as React, it offers a variety of plugins and extensions to cover common use cases.

5. **Signals**: One of the standout features of Preact is "Signals." Signals allow you to declaratively manage asynchronous side effects in your components. This can lead to cleaner and more predictable code compared to using traditional lifecycle methods, making it easier to manage data fetching, state updates, and other asynchronous operations in your components.

In summary, using PreactJS can be a strategic choice for projects that prioritize performance and responsiveness while still maintaining compatibility with React APIs. Its efficient virtual DOM, smaller bundle size, and compatibility make it a compelling option for developers looking to create high-performing web applications. Additionally, the Signals feature can simplify the management of asynchronous operations within your components, contributing to code maintainability and reliability.

**Vite**: Vite is a blazing-fast development build tool for web applications. It focuses on speed by using native ES modules for faster startup and development. Vite is an excellent choice for modern JavaScript and TypeScript projects, offering quick development server start times and efficient code bundling.

**ViteTest**: ViteTest is a testing framework designed to work seamlessly with Vite. It provides an intuitive and efficient way to write and run tests for your web applications. With ViteTest, you can ensure the reliability and quality of your codebase while taking full advantage of Vite's rapid development capabilities.

### Turbo and pnpm

A Turbo monorepo offers these key benefits:

1. **Efficiency**: Simplifies development by managing related projects in one place.
2. **Code Sharing**: Facilitates code reuse and consistency.
3. **Dependency Management**: Centralizes dependency control.
4. **Atomic Commits**: Supports organized, grouped commits.
5. **Efficient Testing**: Simplifies testing across projects.
6. **Integration**: Eases cross-project integration.
7. **CI/CD**: Streamlines automated testing and deployment.
8. **Documentation**: Keeps docs in sync with code.
9. **Visibility**: Provides a unified code overview.
10. **Consistency**: Enforces coding standards and cohesion.

However, if you need to keep parts of your dapp private while making others public, you may need to split it into different repositories to strike the right balance between privacy, collaboration and decentralization.

**Why pnpm?**

pnpm offers:

- **Efficient Disk Usage**: Minimizes storage needs with content-addressable storage.
- **Faster Installations**: Speeds up dependency installations through parallel processing.
- **Workspace Support**: Simplifies monorepo package management.
- **Cache Management**: Centralized cache for shared dependencies.
- **Compatibility**: Compatible with npm and Yarn workflows.
- **Reduced Network Usage**: Lowers network traffic during installs and updates.

### Tech Stack References

#### dApp Frontend

- PreactJS [preactjs.com](https://preactjs.com/)
- TailwindCSS [tailwindcss.com](https://tailwindcss.com)
- Shadcn UI [ui.shadcn.com](https://ui.shadcn.com/)
- Class Variance Authority [cva.style](https://cva.style)
- Conditional Classes [clsx](https://www.npmjs.com/package/clsx)
- GenQL GraphQL Query Composer [remorses/genql](https://github.com/remorses/genql)
- React Hook Form [react-hook-form.com](https://react-hook-form.com)
- React-use hooks [streamich/react-use](https://github.com/streamich/react-use)
- Decimal.js [MikeMcl/decimal.js](https://github.com/MikeMcl/decimal.js)
- Date-fns [date-fns.org](https://date-fns.org/)
- Lodash tools [lodash.com/docs](https://lodash.com/docs)
- Zod validator [colinhacks/zod](https://github.com/colinhacks/zod)
- React-i18next [react.i18next.com](https://react.i18next.com/)
- Framer Motion [framer.com/motion](https://www.framer.com/motion/)
- React Number Format [s-yadav/react-number-format](https://github.com/s-yadav/react-number-format)
- Faker [fakerjs.dev](https://fakerjs.dev/): Generate massive amounts of fake data in the browser and node.js
- Currency.js [scurker/currency.js](https://github.com/scurker/currency.js): A small, lightweight javascript library for working with currency values. ( \* needs review )
- Polkadot Connect SDK (soon)

#### Offchain History

- SubQuery Indexer [subquery.network](https://subquery.network/)
- Docker [docker.com](https://www.docker.com/)

#### Development Tools

- Turbo Monorepo [turbo.build](https://turbo.build/repo/docs/handbook)
- pnpm [pnpm.io](https://pnpm.io/)
- Vite [https://vitejs.dev/](vitejs.dev)
- Vitest [https://vitest.dev/](vitest.dev): A Vite-native unit test framework.

#### Blockchain and Smart Contracts

- Substrate [substrate.io](https://substrate.io/)
- Ink [use.ink](https://use.ink/how-it-works/)
- Polkadot [polkadot.network](https://www.polkadot.network/)

## Directory Structure

```
.
├── README.md
├── contracts ......................................... contracts dev env
├── dapps
│   ├── dapp-starter .................................. new dapp starter
│   ├── nft-marketplace ............................... marketplace example
│   ├── staking-dapp .................................. staking example
│   └── swaps-dapp .................................... swaps example
├── docker
│   ├── Taskfile.yml .................................. docker task manager
│   └── docker-compose.yml ............................ local docker configs
├── indexers .......................................... subquery indexers
├── package.json
├── packages .......................................... shared code
│   ├── eslint-config
│   ├── prettier-config
│   ├── shared-hooks
│   ├── shared-layouts
│   ├── shared-lib
│   ├── shared-services
│   ├── shared-translations
│   ├── shared-types
│   ├── shared-ui
│   ├── tailwind-config
│   └── tsconfig
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── prettier.config.js
└── turbo.json
```

## Design System

A Design System is your guiding light in the world of decentralized application (dApp) development. It's a holistic collection of guidelines, assets, and reusable components that usher in a harmonious visual and functional design across all your dApps. As a single source of truth, it streamlines collaboration between developers and designers, guaranteeing a refined user interface.

### Design Tokens

Our Design System harnesses the mighty capabilities of TailwindCSS to forge design tokens. These tokens are like magic ingredients that define the key design elements of your dApp—colors, typography, spacing, and more. With TailwindCSS seamlessly integrated, managing and updating design tokens becomes a breeze, ensuring swift and consistent design enhancements.

### Shared Components

Nestled within our Turbo Monorepo lies the Shadcn/UI package—an invaluable treasure trove of shared components. Here's why it's the crown jewel of your blockchain project:

**Consistency**: Shadcn/UI boasts a rich library of meticulously designed, fully customizable components, all finely tuned to align with your Design System's principles. This harmonizes your dApps, delivering a consistently stunning user interface.

**Efficiency**: With Shadcn/UI's ready-to-use components, you can slash development time and seamlessly integrate them into your project. It's like having a team of experienced designers and developers at your fingertips, turbocharging your blockchain development.

**Maintainability**: Shadcn/UI is more than just a package; it's a promise of continuous improvement. With active maintenance and updates, your project automatically inherits enhancements and bug fixes, sparing you the hassle of manual updates.

**Customization**: Shadcn/UI's CLI generates component code within your codebase. You have full ownership of this code, making it fully customizable and extensible to meet your specific needs.

## Layouts

A collection of frequently used layouts, readily available for integration into your dapps. These layouts serve as essential container components, providing the foundational structure your application.

## Lib

The "lib" directory is reserved for pure utility functions with no side effects, which means they don't perform storage operations, make HTTP calls, or have any other external effects. These functions solely operate on input and produce output without altering any external state or resources.

## Services

The "services" directory houses plain JavaScript functions responsible for interacting with external APIs and Storage. These functions encapsulate the logic for handling HTTPS requests, WebSocket communication, web storage and API queries.

## Hooks

_in progress_

refs

https://github.com/scio-labs/inkathon
https://use.ink/

## Packages

Within the packages folder, you have the flexibility to create packages tailored for both internal and public use:

- **Internal Packages**: Discover how to develop and manage internal packages effectively by referring to the [Internal Packages Guide](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages).

- **Publishing Packages**: Explore the process of publishing packages for wider consumption by consulting the [Publishing Packages Guide](https://turbo.build/repo/docs/handbook/publishing-packages).

## CI / CD

There will be linting and tests run on github actions.

## Task Manager

We may a global task manager for common tasks using taskfile.dev

## Blockchain

...

### Running a local node

...

### Developing Smart Contracts

...

### Launching a Parachain

...

## Coding Style Guidelines

At the heart of our development philosophy lies a commitment to crafting clean, maintainable, and efficient code. These guidelines are designed to steer you towards a coding style that is both functional and declarative, promoting collaborative development and an enjoyable coding experience.

Drawing inspiration from Robert C. Martin's book "Clean Code," we've adapted these software engineering principles to the realm of JavaScript. This guide serves as a compass, helping you produce code that is not only readable but also highly reusable and easily refactorable. For an in-depth exploration of these principles in the context of JavaScript, we recommend referring to the [Clean Code JavaScript repository](https://github.com/ryanmcdermott/clean-code-javascript).

Adhering to these guidelines propels your JavaScript software to industry standards, enhancing quality, efficiency, and your development experience.

### JavaScript Conventions

- **Functional and Declarative Code**: Harness the capabilities of modern JavaScript features and TypeScript to craft code that embodies functional and declarative principles. This approach enhances code readability and maintainability, ensuring your codebase remains comprehensible and easy to work with.

- **Meaningful Naming**: Elevate the clarity of your code by employing meaningful and self-explanatory variable and function names. For boolean variables, wield auxiliary verbs like `does`, `has`, `is`, and `should` to illuminate their purpose. For instance, when creating a button component, opt for names such as `isDisabled` or `isLoading` to clearly convey their intended functionality.

- **Component Modularity**: Embrace the concept of component modularity by breaking down larger components into smaller, focused parts with minimal props. Prioritize composability over sprawling monolithic components, promoting a more flexible and maintainable codebase.

- **Collocation**: Foster code organization by collocating related code files within the same directory, especially when they are used exclusively in a specific component. For instance, within the `pages/dashboard` directory, consider placing components, utilities, and hooks that are uniquely associated with that route. Elevate components to the shared folder only when they demonstrate utility across multiple locations or serve as foundational building blocks (e.g., "primitives").

- **File Naming**: Create a cohesive folder structure with lowercase, dash-separated folder names, such as `components/auth-wizard`. Within these folders, adhere to consistent file naming conventions, including extensions like:
  - `.config.ts`
  - `.test.ts`
  - `.context.tsx`
  - `.type.ts`
  - `.page.tsx` (with the file name matching the route name, e.g., `dashboard.page.tsx`)
  - `.hook.ts` (optional, hooks following the `use-something` pattern are easy to identify as such)

Eg: `import { NftItem } from './nft-item`

```
└── nft-item
    ├── index.ts   ( exports )
    ├── nft-item.tsx
    ├── nft-item-header.tsx
    ├── nft-item-footer.tsx
    ├── nft-item-main.tsx
    ├── use-nft-item.ts
    ├── nft-item.type.ts
    ├── nft-item.context.tsx
    └── nft-item.test.tsx
```

Following this file naming pattern empowers you to swiftly identify each file's type, streamlining your code navigation process. It saves valuable time and enhances your coding efficiency over time.

- **Avoid Hasty Abstractions**: Abstraction is a powerful tool, but it should be wielded judiciously. Avoid rushing into abstractions; instead, introduce them when they organically fit your codebase. Don't shy away from code duplication initially, as it's a stepping stone towards well-considered abstractions. Learn more about this approach in this insightful article by Kent C. Dodds: [Aha Programming](https://kentcdodds.com/blog/aha-programming).

- **Avoid Default Exports**: Opt for named exports over default exports. Named exports enhance code clarity and maintainability by explicitly specifying the exported items, leaving no room for ambiguity.

- **Infer TypeScript Return Types**: Harness TypeScript's remarkable type inference capabilities to automatically deduce precise return types from your functions. This streamlines your code by reducing boilerplate and maintenance surface.

- **Receive an Object, Return an Object (RORO)**: Many functions should adhere to the RORO pattern, where they receive an object as a parameter and return an object as a result. This pattern enhances flexibility and clarity. Here's an example:

```ts
// services/account/account.service.ts
export async function getAccounts({ account, limit = 15, offset = 0 }: GetAccountsParams) {
  // Implementation...
  return { accounts: [] }
}

// types/services.type.ts
export interface ServiceParams {
  limit?: number
  offset?: number
}

// services/account/account.type.ts
export interface GetAccountsParams extends ServiceParams {
  account?: string
}
```

### React Conventions

- **Function Component Declaration**: Declare React components using the `function` keyword for a cleaner syntax and better linting support. ( rules of hooks seem not work well with components declared with const )

- **Use `const` for Methods**: When defining methods within a component, use `const` to cleary differiante them from the components and lib functions.

- **Code Order**: Maintain a consistent code order within your components:

  1. Function component declaration
  2. Styled components
  3. TypeScript types
  4. `getServerSideProps` (if applicable)

- **Ternaries over `&&` in JSX**: When dealing with conditional rendering in JSX, prefer ternaries over `&&` for clarity and readability.

Here's an example of a well-structured React component following these conventions:

```tsx
export function MyReactComponent({ myParam }: MyReactComponentParams) {
  const myMethod = () => console.log(myParam)

  return (
    <div className="bg-slate-100 md:flex">
      A new world awaits. <br /> Be the first to discover it.
      <button onClick={myMethod}>Let's go!</button>
    </div>
  )
}

export interface MyReactComponentParams {
  myParam: boolean
}
```

These guidelines will help maintain code consistency, readability, and collaboration across your project.

### React State Management

When it comes to managing state in your components, thoughtful decisions about the structure and organization of your state variables can significantly impact your code's clarity and maintainability. Here are some guiding principles to help you make informed choices:

#### Use Preact Signals

Consider leveraging Preact Signals, which are reactive primitives designed for efficiently managing application state. Signals enable you to create responsive and well-structured state management in your Preact applications. You can learn more about them [here](https://preactjs.com/guide/v10/signals/).

#### Async State Handling

For handling data fetching and asynchronous state flags, embrace tools like `useAsync`, `useAsyncFn`, and `SWR`. These tools simplify asynchronous data management and provide a convenient `{data, isLoading, error}` structure to work with.

#### Group Related State

When multiple state variables are consistently updated together, think about consolidating them into a single state variable. This approach minimizes contradictions within your state and simplifies maintenance.

#### Avoid Redundant State

If you can derive certain information from component props or existing state variables during rendering, avoid duplicating that information in component state. This practice promotes cleaner and more efficient code.

#### Minimize Duplication

Avoid duplicating data between multiple state variables or within nested objects. Duplication complicates data synchronization and can lead to inconsistencies. Strive to reduce redundancy in your state structure.

#### Flatten Nested State

Deeply nested state structures can be cumbersome to update and manage. Whenever possible, opt for a flat state structure. This approach simplifies state updates and enhances code maintainability.

#### Keep State Serializable

To ensure the smooth functioning of features like persistence and time-travel debugging, it's advisable to store only plain serializable objects, arrays, and primitives in your state. While it's technically possible to include non-serializable items, doing so can introduce complexities and potential issues with these essential features.

#### Use Arrays Instead of Maps

When working with state collections, favor arrays over maps. Arrays are more predictable and performant in most cases, contributing to a smoother development experience.

By following these principles and considering the structure and organization of your state variables, you can create a robust and maintainable state management system for your Preact applications. This approach ensures that your code remains easy to update and debug, reducing the chances of introducing bugs and enhancing the overall quality of your application.

### Styling

In the realm of styling, substrate-dapp employs a highly efficient Utility-First approach with TailwindCSS, ensuring a rapid development pace without compromising on quality.

If you're curious about the philosophy behind TailwindCSS, here's a [captivating interview with the founder](https://open.spotify.com/episode/2NCNJ3AqEjALX2xza3JKkE?si=ZbnuQrwOT-C4agFxC6yTjg).

**Benefits of Using TailwindCSS**:

- **Unleash Creative Freedom**: TailwindCSS empowers developers by maximizing creative expression within your application's functionality. Say goodbye to the laborious task of crafting class names and CSS structures.

- **Reduced Cognitive Load**: Forget about constantly juggling class hierarchies. TailwindCSS eliminates the need for extensive class hierarchy thinking, making your project more approachable and maintainable.

- **Localized Element Changes**: Make changes to elements with confidence, knowing that your modifications won't inadvertently affect other parts of your project.

- **Customizable Default Theme**: TailwindCSS boasts an exceptional default theme that can be effortlessly customized to align with your unique design system requirements.

- **Robust Community and TailwindUI**: The TailwindCSS community is vast, and the availability of resources like TailwindUI allows you to easily integrate and adapt components from other projects without creating unwieldy code Frankensteins.

- **Constraint-Based Styling**: TailwindCSS enforces CSS based on constraints through themes and design tokens, ensuring a consistent and structured design approach.

- **Simplified Styling**: Compared to alternatives like styled-components, TailwindCSS is relatively less complex, reducing the need for in-depth JavaScript knowledge.

- **Emmet Integration**: Seamlessly combine TailwindCSS with Emmet for an expedited development process, as it exclusively utilizes class names.

For more advanced styling options, consider exploring variant-based components using Class Variant Authority (CVA) at [cva.style](https://cva.style/docs). TailwindCSS offers a versatile and intuitive styling solution that aligns perfectly with modern development practices, ensuring you can focus more on building exceptional applications and less on wrestling with styles.

## Getting Started

```
git
pnpm install
pnpm build
```

## Learning Resources

### Subtrate dApp Video Tutorials

_coming soon_

### Turborepo

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Contributing

Follow the standard Github Flow for PRs.

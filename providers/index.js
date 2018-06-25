import React from "react";
import hoistStatics from "hoist-non-react-statics";
import { MyContextProvider, MyContext } from "./MyProvider";

const AppProviders = props => (
  <MyContextProvider>{props.children}</MyContextProvider>
);

const contexts = {
  MyContext
};

const withContext = contextName => Component => {
  const fullContextName = `${contextName}Context`;

  if (!contexts.hasOwnProperty(fullContextName)) {
    const contextKeys = Object.keys(contexts).toString();
    throw new Error(`
      Wrong context name! You don't have context with name ${fullContextName}.
      Please, use one of avaliable contexts: ${contextKeys}.
    `);
  }

  const { Consumer } = contexts[fullContextName];

  const Wrap = () => {
    return <Consumer>{props => <Component {...props} />}</Consumer>;
  };

  Wrap.displayName = `withContext(${Component.displayName || Component.name})`;
  Wrap.WrappedComponent = Component;

  return hoistStatics(Wrap, Component);
};

export { AppProviders as default, contexts, withContext };

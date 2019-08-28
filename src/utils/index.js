import React from 'react';
import * as R from 'ramda';
import { inject, observer } from 'mobx-react';
import { branch, compose, mapProps } from 'recompose';

export { default as history } from './history';

export const noop = () => undefined;

export const formatPrice = (price, currency = 'RUB') =>
  new Intl.NumberFormat('ru-RU', {
    currency,
    style: 'currency',
    minimumFractionDigits: 0,
  }).format(`${price}`.replace(/[^0-9]/g, '') || 0);

export const logAction = title => (...args) => console.log(title, ...args);

export const useStore = component => ({ useStore, storeMap, ...props }) => {
  const storeToProp = storeMap || (p => p);
  const Component = branch(
    () => useStore,
    compose(
      inject(useStore),
      observer,
      mapProps(props => {
        const store = props[useStore];

        if (store && storeMap) {
          return { ...props, ...storeToProp(store) };
        }

        return props;
      })
    )
  )(component);

  return <Component {...props} />;
};

export const injectFields = (store, ...fields) => Component => {
  return branch(
    () => !!store,
    compose(
      inject(store),
      observer,
      mapProps(R.pickAll(R.flatten(fields)))
    )
  )(Component);
};

export const injectMap = (store, propMap) => Component => {
  return branch(
    p => p.useStore,
    compose(
      inject(store),
      observer,
      mapProps(props => ({ ...props, ...propMap(props[store]) }))
    )
  )(Component);
};

export const getParams = R.pathOr(undefined, ['props', 'match', 'params']);

export const promiseLogger = name => res => {
  console.log(name, res);

  return res;
};

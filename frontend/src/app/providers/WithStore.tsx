"use client";
import * as React from 'react';
import {Provider} from 'react-redux'
import {store} from "@/shared/store";

interface Props {
  children: React.ReactNode
}

export const WithStore = (props: Props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};
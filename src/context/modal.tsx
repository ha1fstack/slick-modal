"use client";

import React from "react";

import { SlickModalStore, defaultStore } from "../store";

export const SlickModalContext =
  React.createContext<SlickModalStore>(defaultStore);

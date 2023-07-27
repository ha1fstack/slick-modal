"use client";

let increment = 0;

export function generateModalKey() {
  return `_smid_${increment++}`;
}

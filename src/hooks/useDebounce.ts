import { DependencyList, useEffect } from 'react';
import useTimeout from './useTimeout';

/* source: WebDevSimplified  
   https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/3-useDebounce/useDebounce.js
*/

export default function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: DependencyList
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

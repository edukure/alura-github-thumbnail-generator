import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/* source: WebDevSimplified  
   https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/4-useUpdateEffect/useUpdateEffect.js
*/

export default function useUpdateEffect(
  callback: EffectCallback,
  dependencies: DependencyList
) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return null;
    }

    return callback();
  }, [dependencies, callback]);
}

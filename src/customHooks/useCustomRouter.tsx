/* eslint-disable react-hooks/exhaustive-deps */
import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useCustomRouter() {
  const [queryString, setQueryString] = useState('');
  const [pathComponent, setPathComponent] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { asPath, pathname } = router;
      const asPathArray = asPath.split('/'); // Splitting path
      setQueryString(asPathArray.length > 1 ? asPathArray[1] : '');
      setPathComponent(pathname.replace(/\//g, ''));
    }
  }, [router.isReady, router.asPath, router.pathname]);

  const push = async (url: Url, ...rest: any) => {
    try {
      if (typeof url === 'string') {
        await router.push(url);
      } else {
        await router.push(url, ...rest);
      }
    } catch (error) {
      console.error('Error in router.push:', error);
    }
  };

  return {
    ...router,
    queryString,
    pathComponent,
    push,
  };
}

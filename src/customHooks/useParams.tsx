import { JsonObject } from '@/types/jsonObject';
import { formatQueryParam } from '@/utils';
import { useRouter } from 'next/router';
import { keys, reduce } from 'ramda';
import { useEffect, useState } from 'react';

export function useParams() {
  const [params, setParams] = useState<JsonObject>({});
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setParams(
        reduce(
          (acc, key) => ({
            ...acc,
            [key]: formatQueryParam(router.query[key]),
          }),
          {},
          keys(router.query)
        )
      );
    }
  }, [router.isReady, router.query]);
  return params;
}

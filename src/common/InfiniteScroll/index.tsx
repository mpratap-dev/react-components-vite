import { ReactElement, useCallback, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

type Props = {
  children: (data: any) => ReactElement;
  dataKey: string;
  containerClassName?: string;
  itemClassName?: string;
  getApiData?: ({ pageParam }: any) => any;
};

const LIMIT = 30;

const InfiniteScroll = ({
  children,
  dataKey = "data",
  containerClassName,
  itemClassName,
  getApiData
}: Props) => {

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: getApiData,
    getNextPageParam: (lastPage) => {
      return (lastPage.products.length > 0) && lastPage.skip + LIMIT;
    },
  });

  const { pages } = data || {};
  const observer = useRef<IntersectionObserver>();

  const lastItemRef = useCallback(
    (node: any) => {
      if (!hasNextPage || isFetchingNextPage) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });
      if (node) observer.current?.observe(node);
    },
    [hasNextPage, isFetchingNextPage]
  );

  return (
    <div className={`card card-body ${containerClassName || ""}`}>
      {Array.isArray(pages) &&
        pages.map((page) => {
          return (
            Array.isArray(page[dataKey]) &&
            page[dataKey].map((data: any, index: number) => {
              if (page.limit === index + 1)
                return (
                  <div
                    key={data.id + index}
                    className={itemClassName || ""}
                    ref={lastItemRef}
                  >
                    {children(data)}
                  </div>
                );
              return (
                <div key={data.id + index} className={itemClassName || ""}>
                  {children(data)}
                </div>
              );
            })
          );
        })}
      <div>{isFetching && "...Loading"}</div>
    </div>
  );
};

export default InfiniteScroll;

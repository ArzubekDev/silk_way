import Home from '@/components/pages/home/Home';
import { getProducts } from '@/shared/api/product.api';
import { PRODUCT_KEYS } from '@/shared/api/query-keys';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';



export default async function HomePage() {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: PRODUCT_KEYS.all,
      queryFn: getProducts,
    });
  } catch (error) {}

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}

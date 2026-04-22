import Search from '@/components/pages/search';
import { getSearchProducts } from '@/shared/api/product.api';

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
  const { query } = await searchParams;
  
  const products = query ? await getSearchProducts(query) : [];

  return <Search query={query || ''} initialData={products} />;
};

export default SearchPage;
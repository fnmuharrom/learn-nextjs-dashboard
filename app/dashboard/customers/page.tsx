import { fetchCustomerPages } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function CustomerPage({
  searchParams,
} : {
  searchParams? : {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomerPages(query);
  return (
      <CustomersTable query={query} currentPage={currentPage} totalPages={totalPages} />
  );
}

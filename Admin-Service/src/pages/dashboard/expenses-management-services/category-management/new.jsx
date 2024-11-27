import { Helmet } from 'react-helmet-async';

import { CategoryCreateView } from 'src/sections/categoriesmanagement/view';

// ----------------------------------------------------------------------

export default function CategoryCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new category</title>
      </Helmet>

      <CategoryCreateView />
    </>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductCatalog = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <Card>
        <CardHeader>
          <CardTitle>Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manage your product catalog here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCatalog;
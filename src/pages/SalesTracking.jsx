import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SalesTracking = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Tracking</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sales Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Track your sales performance here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesTracking;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomerInteractionHistory = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Interaction History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Interaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <p>View the history of interactions with customers here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerInteractionHistory;
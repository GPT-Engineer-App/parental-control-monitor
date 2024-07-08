import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EmailIntegration = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Email Integration</h1>
      <Card>
        <CardHeader>
          <CardTitle>Email</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Send, receive, and organize your emails here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailIntegration;
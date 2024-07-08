import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReportingAnalytics = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reporting & Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Generate and view reports here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportingAnalytics;
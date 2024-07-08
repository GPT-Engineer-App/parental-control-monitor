import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalendarIntegration = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendar Integration</h1>
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <p>View and manage your calendar here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarIntegration;
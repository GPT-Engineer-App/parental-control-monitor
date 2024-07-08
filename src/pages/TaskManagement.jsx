import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TaskManagement = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Task List</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manage your tasks here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskManagement;
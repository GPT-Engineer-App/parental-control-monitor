import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NoteTaking = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Note Taking</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Take and organize your notes here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteTaking;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GeoLocation = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Geo-location</h1>
      <Card>
        <CardHeader>
          <CardTitle>Client Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>View client locations on the map here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeoLocation;
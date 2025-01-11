import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Tokenomics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tokenomics</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-4">Initial Distribution</h3>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-48 h-48 relative">
            <div className="absolute inset-0 rounded-full border-8 border-blue-500"></div>
            <div
              className="absolute inset-0 rounded-full border-8 border-orange-500"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 20%)" }}
            ></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
          sint commodi repudiandae consequuntur voluptatum laborum.
        </p>
      </CardContent>
    </Card>
  )
}


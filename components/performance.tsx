import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Performance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Today's Low</span>
              <span className="text-gray-500">Today's High</span>
            </div>
            <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 bg-black"></div>
                <div className="text-xs mt-1">$48,637.83</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">52W Low</span>
              <span className="text-gray-500">52W High</span>
            </div>
            <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 bg-black"></div>
                <div className="text-xs mt-1">$52,681.92</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


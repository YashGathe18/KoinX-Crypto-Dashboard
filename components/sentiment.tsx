import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from 'lucide-react'

export function Sentiment() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>Sentiment</CardTitle>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Key Events <Info className="w-4 h-4 text-gray-400" />
        </h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg flex gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <img src="/placeholder.svg" alt="News" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold">Lorem ipsum dolor sit amet consectetur</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam.
                Excepturi quos provident quasi amet.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


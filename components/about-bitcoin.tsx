import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutBitcoin() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Bitcoin</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">What is Bitcoin?</h3>
          <p className="text-gray-600">
            Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network
            verify transactions through cryptography and record them in a public distributed ledger
            called a blockchain.
          </p>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
            vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}


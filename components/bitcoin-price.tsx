"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from 'lucide-react'

interface PriceData {
  bitcoin: {
    inr: number
    inr_24h_change: number
    usd: number
    usd_24h_change: number
  }
}

export function BitcoinPrice() {
  const [priceData, setPriceData] = useState<PriceData | null>(null)

  useEffect(() => {
    async function fetchPrice() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        )
        const data = await response.json()
        setPriceData(data)
      } catch (error) {
        console.error("Error fetching price:", error)
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  if (!priceData) return null

  const isPositiveChange = priceData.bitcoin.usd_24h_change > 0

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <img src="/placeholder.svg" alt="Bitcoin" className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Bitcoin</h1>
          <span className="text-gray-500">BTC</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${priceData.bitcoin.usd.toLocaleString()}</span>
          <div
            className={`flex items-center px-2 py-1 rounded ${
              isPositiveChange ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
            }`}
          >
            {isPositiveChange ? (
              <ArrowUp className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDown className="w-4 h-4 mr-1" />
            )}
            {Math.abs(priceData.bitcoin.usd_24h_change).toFixed(2)}%
          </div>
        </div>
        <div className="text-gray-500 mt-1">
          ₹ {priceData.bitcoin.inr.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  )
}


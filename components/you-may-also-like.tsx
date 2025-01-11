"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react'
import Button from "@/components/ui/button"

interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    thumb: string
    data: {
      price: string
      price_change_percentage_24h: {
        usd: number
      }
      sparkline: string
    }
  }
}

export function YouMayAlsoLike() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending")
        const data = await response.json()
        setTrendingCoins(data.coins)
      } catch (error) {
        console.error("Error fetching trending coins:", error)
      }
    }

    fetchTrending()
  }, [])

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {trendingCoins.map((coin) => (
              <Card key={coin.item.coin_id} className="min-w-[300px]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={coin.item.thumb} alt={coin.item.name} className="w-6 h-6" />
                    <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
                    <div
                      className={`flex items-center px-2 py-1 rounded text-sm ${
                        coin.item.data.price_change_percentage_24h.usd > 0
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                        <ArrowUp className="w-3 h-3 mr-1" />
                      ) : (
                        <ArrowDown className="w-3 h-3 mr-1" />
                      )}
                      {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%
                    </div>
                  </div>
                  <div className="font-bold">{coin.item.data.price}</div>
                  <img
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.name} price graph`}
                    className="w-full h-16 mt-2"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg"
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}


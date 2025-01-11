"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from 'lucide-react'

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
    }
  }
}

export function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending")
        const data = await response.json()
        setTrendingCoins(data.coins.slice(0, 3))
      } catch (error) {
        console.error("Error fetching trending coins:", error)
      }
    }

    fetchTrending()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Coins (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingCoins.map((coin) => {
            const isPositive = coin.item.data.price_change_percentage_24h.usd > 0
            return (
              <div key={coin.item.coin_id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={coin.item.thumb} alt={coin.item.name} className="w-6 h-6" />
                  <span className="font-medium">
                    {coin.item.name} ({coin.item.symbol.toUpperCase()})
                  </span>
                </div>
                <div
                  className={`flex items-center px-2 py-1 rounded ${
                    isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  }`}
                >
                  {isPositive ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}


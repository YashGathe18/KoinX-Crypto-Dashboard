import { BitcoinPrice } from "@/components/bitcoin-price"
import { TradingViewChart } from "@/components/trading-view-chart"
import { Performance } from "@/components/performance"
import { Sentiment } from "@/components/sentiment"
import { AboutBitcoin } from "@/components/about-bitcoin"
import { Tokenomics } from "@/components/tokenomics"
import { Team } from "@/components/team"
import { TrendingCoins } from "@/components/trending-coins"
import { YouMayAlsoLike } from "@/components/you-may-also-like"
import Button from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <BitcoinPrice />
          <TradingViewChart />
          <div className="flex overflow-x-auto gap-4 py-2">
            <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
              Overview
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600">
              Fundamentals
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600">
              News Insights
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600">
              Sentiments
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600">
              Team
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600">
              Technicals
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600">
              Tokenomics
            </button>
          </div>
          <Performance />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>
        <div className="lg:w-80 space-y-6">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h2>
            <p className="mb-6">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img src="/placeholder.svg" alt="KoinX Features" className="mb-6" width={200} height={160} />
            <Button className="w-full bg-white text-black hover:bg-gray-100">
              Get Started for FREE
            </Button>
          </div>
          <TrendingCoins />
        </div>
      </div>
      <YouMayAlsoLike />
    </main>
  )
}


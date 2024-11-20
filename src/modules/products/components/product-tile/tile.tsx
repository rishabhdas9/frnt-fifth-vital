import { StoreProduct } from "@medusajs/types"
import { Box } from "@modules/common/components/box"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text } from "@modules/common/components/text"
import { Clock, Users } from "lucide-react"
import ProductPrice from "./price"

export function ProductTileClient({
  product,
  cheapestPrice,
}: {
  product: StoreProduct
  cheapestPrice: {
    calculated_price_number: any
    calculated_price: string
    original_price_number: any
    original_price: string
    currency_code: any
    price_type: any
    percentage_diff: string
  }
}) {
  return (
    <Box className="group flex flex-col">
      <Box className="relative h-[200px] bg-[#1B4B40] p-6 text-white">
        <Text
          title={product.title}
          size="lg"
          className="text-lg font-semibold mb-4"
        >
          {product.title}
        </Text>

        <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>91 parameters</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Reports within 24 hours</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <Box className="flex items-center gap-2 text-white">
              {cheapestPrice.price_type === "sale" && (
                <Text size="md" className="line-through opacity-75">
                  {cheapestPrice.original_price}
                </Text>
              )}
              <Text className="text-2xl font-bold">
                {cheapestPrice.calculated_price}
              </Text>
            </Box>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <LocalizedClientLink
            href={`/products/${product.handle}`}
            className="w-full"
          >
            <Button
              variant="secondary"
              className="w-full text-white border-white hover:bg-white/10"
            >
              View Details
            </Button>
          </LocalizedClientLink>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Add to Cart
          </Button>
        </div>
      </Box>
    </Box>
  )
}

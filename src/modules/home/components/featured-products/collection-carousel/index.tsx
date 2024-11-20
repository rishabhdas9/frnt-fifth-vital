import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import { Box } from '@modules/common/components/box'
import { Container } from '@modules/common/components/container'
import InteractiveLink from "@modules/common/components/interactive-link"
// import ProductPreview from "@modules/products/components/product-preview"
import ProductTile from "@modules/products/components/product-tile"
import CarouselWrapper from '@modules/products/components/product-carousel/carousel-wrapper'

interface CollectionCarouselProps {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}

export default function CollectionCarousel({
  collection,
  region,
}: CollectionCarouselProps) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <Container className="overflow-hidden py-12 small:py-24">
      <Box className="flex flex-col gap-6 small:gap-12">
        <CarouselWrapper title={collection.title} productsCount={products.length}>
          <Box className="flex gap-2">
            {products.map((product) => (
              <Box
                className="flex-[0_0_calc(72.666%-8px)] small:flex-[0_0_calc(62.666%-8px)] medium:flex-[0_0_calc(42.666%-8px)] xl:flex-[0_0_calc(33.333%-8px)] 2xl:flex-[0_0_calc(30.333%-8px)]"
                key={product.id}
              >
                {/* <ProductPreview product={product} region={region} isFeatured /> */}
                <ProductTile product={product} regionId={region.id} />
              </Box>
            ))}
          </Box>
        </CarouselWrapper>
        <InteractiveLink 
          href={`/collections/${collection.handle}`}
          // className="mx-auto w-max"
        >
          View all
        </InteractiveLink>
      </Box>
    </Container>
  )
}
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Download, ChevronDown } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IMAGES } from '@/assets/images';
import {
  PROJECT_INFO,
  UNIT_TYPES,
  AMENITIES,
  CONTACT_INFO,
  getWhatsAppLink,
  scrollToSection
} from '@/lib/index';

const springPresets = {
  gentle: { type: 'spring' as const, stiffness: 300, damping: 35 },
  snappy: { type: 'spring' as const, stiffness: 400, damping: 30 }
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: springPresets.gentle
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="w-full">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BUILDING_EXTERIOR_2}
            alt="Deep Water South"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight text-blue-900">
              DEEP WATER SOUTH
            </h1>
            <p className="text-2xl md:text-3xl text-blue-700 mb-2 font-semibold">
              第6B期 GRANDE BLANC
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              全新臨海高端超級豪宅
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              香港仔黃竹坑站港島南岸
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-blue-100 text-blue-900">
                154伙優質住宅
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-blue-100 text-blue-900">
                實用面積862方呎起
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-blue-100 text-blue-900">
                全數三房及四房戶型
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-blue-900 hover:bg-blue-800"
                asChild
              >
                <a
                  href={getWhatsAppLink('+85294085969', '您好，我對Deep Water South項目感興趣，希望了解更多詳情')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  立即預約
                  <SiWhatsapp className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                asChild
              >
                <a
                  href={getWhatsAppLink('+85294085969', '您好，我對Deep Water South項目感興趣，希望了解更多詳情')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  預約參觀
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="animate-bounce"
              aria-label="向下滾動"
            >
              <ChevronDown className="h-8 w-8 text-muted-foreground" />
            </button>
          </motion.div>
        </div>
      </section>

      <section id="brochure" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              項目簡介
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-8">
              香港仔黃竹坑站港島南岸第6期，提供154伙全數屬於三房及四房戶型
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">第6B期戶型配置</h3>
                  <p className="text-lg mb-2">• 90伙三房戶</p>
                  <p className="text-lg mb-2">• 58伙四房戶</p>
                  <p className="text-lg mb-2">• 1伙連天台特色戶</p>
                  <p className="text-lg">• 5伙連平台特色戶</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">實用面積範圍</h3>
                  <p className="text-lg mb-2">• 三房戶：862方呎起</p>
                  <p className="text-lg mb-2">• 四房戶：最大1,696方呎</p>
                  <p className="text-lg mb-2">• 層高約3.325米</p>
                  <p className="text-lg">• 銀幕式弧形景觀窗</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">豪華配置</h3>
                  <p className="text-lg mb-2">• 四房雙套間隔</p>
                  <p className="text-lg mb-2">• 私人升降機</p>
                  <p className="text-lg mb-2">• 60方呎露台</p>
                  <p className="text-lg">• 深水灣及壽臣山景觀</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">精選戶型</h3>
                  <p className="text-lg mb-2">• 1A座28樓A室</p>
                  <p className="text-lg mb-2">• 實用面積1,696方呎</p>
                  <p className="text-lg mb-2">• 四房雙套設計</p>
                  <p className="text-lg">• 連60方呎露台</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeInUp}
            className="text-center mt-12"
          >
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-900 hover:bg-blue-800">
              <Download className="mr-2 h-5 w-5" />
              下載電子樓書
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="pricelist" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              價單
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-muted-foreground">
              第6B期 GRANDE BLANC 最新價格及付款計劃
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={staggerItem}>
              <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <i className="fas fa-file-alt text-3xl text-blue-900"></i>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-900">GRANDE BLANC 價單</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-left">
                      <h4 className="text-xl font-semibold mb-2 text-blue-800">三房戶型</h4>
                      <p className="text-lg mb-1">• 90伙三房戶</p>
                      <p className="text-lg mb-1">• 實用面積：862方呎起</p>
                      <p className="text-lg">• 三房一套設計</p>
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-semibold mb-2 text-blue-800">四房戶型</h4>
                      <p className="text-lg mb-1">• 58伙四房戶</p>
                      <p className="text-lg mb-1">• 實用面積：最大1,696方呎</p>
                      <p className="text-lg">• 四房雙套間隔</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">特色戶型</h4>
                    <p className="text-base">• 1伙連天台特色戶 • 5伙連平台特色戶</p>
                    <p className="text-base">• 私人升降機 • 深水灣及壽臣山景觀</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeInUp}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              查看完整價單
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="location" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              位置
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-muted-foreground">
              香港仔黃竹坑站港島南岸，鄰近深水灣及壽臣山
            </motion.p>
            <motion.p variants={staggerItem} className="text-lg text-muted-foreground mt-2">
              全新臨海高端超級豪宅
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-subway text-2xl text-blue-900"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">黃竹坑站</h3>
                  <p className="text-muted-foreground">港鐵南港島線直達中環核心商業區</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-water text-2xl text-blue-900"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">深水灣</h3>
                  <p className="text-muted-foreground">香港著名海灘，享受優質海濱生活</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-mountain text-2xl text-blue-900"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">壽臣山</h3>
                  <p className="text-muted-foreground">高尚住宅區，環境清幽私隱度高</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              相冊
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-4">
              「7 大水主題 4 大蔚藍泳池」
            </motion.p>
            <motion.p variants={staggerItem} className="text-lg text-blue-700 font-semibold">
              「港島南岸首個梯級式無邊際泳池」
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {[
              { src: IMAGES.INFINITY_POOL_1, alt: '梯級式無邊際泳池', featured: true },
              { src: IMAGES.INFINITY_POOL_9, alt: '蔚藍泳池景觀', featured: true },
              { src: IMAGES.INTERIOR_VIEW_3, alt: '四房雙套設計', featured: false },
              { src: IMAGES.INTERIOR_VIEW_1, alt: '豪華客廳設計', featured: false },
              { src: IMAGES.BUILDING_EXTERIOR_8, alt: '現代建築外觀', featured: false },
              { src: IMAGES.BUILDING_EXTERIOR_2, alt: 'DEEP WATER SOUTH 全景', featured: false }
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                  image.featured ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-semibold">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              聯絡我們
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-muted-foreground">
              歡迎預約參觀 GRANDE BLANC 示範單位
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={staggerItem}>
              <Card className="border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                      <SiWhatsapp className="text-3xl text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">WhatsApp 聯繫我們</h3>
                  <p className="text-muted-foreground mb-6">即時查詢 DEEP WATER SOUTH 第6B期 GRANDE BLANC 詳情</p>
                  <Button
                    className="w-full text-lg py-6 bg-green-600 hover:bg-green-700"
                    size="lg"
                    asChild
                  >
                    <a
                      href={getWhatsAppLink('85298765432', '我想查詢 DEEP WATER SOUTH 第6B期 GRANDE BLANC 項目資料')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="mr-2 h-5 w-5" />
                      WhatsApp 聯繫我們
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
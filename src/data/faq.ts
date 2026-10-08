export type SoruCevap = {
  soru: string;
  /** Tek paragraf duz metin. Hem sayfada hem FAQPage schema'sinda ayni gecer. */
  cevap: string;
};

/**
 * Sik sorulan sorular.
 *
 * ⚠️ Cevaplar bilerek TAAHHUT ICERMEZ: fiyat, gun sayisi, garanti suresi ya da
 * "su isi de yapariz" turu kapsam sozu yok. Bunlar musteriyle teyit edilmeden
 * yazilmamali. Soru eklerken ayni cizgiyi koru.
 *
 * Google'in FAQPage kurali: buradaki her soru-cevap sayfada GORUNUR olmak
 * zorunda. Bu yuzden hem bolum hem schema ayni diziden beslenir (Faq.tsx).
 */
export const sorular: SoruCevap[] = [
  {
    soru: "Keşif ücretli mi?",
    cevap:
      "Hayır, keşif ücretsizdir. Projeyi yerinde inceleyip metrajı çıkarıyor, mekâna uygun kağıt türünü öneriyoruz.",
  },
  {
    soru: "Uygulama ne kadar sürer?",
    cevap:
      "Süre; metraja, duvarların mevcut durumuna ve seçilen kağıt türüne göre değişir. Keşiften sonra net bir süre ve termin veriyoruz.",
  },
  {
    soru: "Fiyat neye göre belirlenir?",
    cevap:
      "Fiyatı metraj, seçilen kağıt türü, yüzeyin hazırlık durumu ve işin yeri belirler. Keşif sonrasında net teklif sunuyoruz.",
  },
  {
    soru: "Eski duvar kağıdının sökülmesi gerekir mi?",
    cevap:
      "Çoğu durumda gerekir. Altta kalan eski kağıt, yeni kağıdın yüzeyinde iz ve doku farkı olarak kendini gösterir. Nasıl ilerleneceğine duvarın durumuna bakarak keşifte karar veriyoruz.",
  },
  {
    soru: "Duvarın uygulamaya hazır olması gerekiyor mu?",
    cevap:
      "Yüzeyin düzgün, kuru ve tozsuz olması gerekir. Hangi hazırlığın gerektiğini keşifte tespit edip birlikte planlıyoruz.",
  },
  {
    soru: "Hangi kağıt türü bana uygun?",
    cevap:
      "Bu, mekânın kullanımına ve beklediğiniz dokuya göre değişir. Hizmetler bölümündeki “Hangi kağıt nereye uygun?” tablosu hızlı bir fikir verir; kesin öneriyi keşifte yapıyoruz.",
  },
  {
    soru: "Akustik duvar kağıdı sesi tamamen keser mi?",
    cevap:
      "Hayır. Akustik kağıt sesi tamamen kesmez; odadaki yankıyı ve ses yansımasını azaltır. Toplantı odaları, sinema odaları ve çocuk odalarında belirgin fark yaratır.",
  },
  {
    soru: "Otel ve toplu projelerde süreç farklı mı işliyor?",
    cevap:
      "Evet. Otel, rezidans ve toplu konut projelerinde metraj, etap planı ve termin baştan birlikte kurgulanır; süreç boyunca tek bir irtibat noktasıyla çalışırsınız.",
  },
];

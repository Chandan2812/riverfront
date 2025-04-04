    import { useState } from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    const categories = ["OFF-PLAN", "RESALES & RENTALS", "EXCLUSIVE"];

    const properties: Record<string, { name: string; images: string[]; highlights: string[] }[]> = {
        "OFF-PLAN": [
          {
            name: "Nad Al Sheba Gardens Phase 7",
            images: [
              "https://uniqueproperties.ae/en/uploads/frontend/projects/613392/conversions/Nad-Al-Sheba-Gardens-Phase-7-Brochure-9-resize_images.webp",
              "https://uniqueproperties.ae/en/uploads/frontend/projects/613393/conversions/Nad-Al-Sheba-Gardens-Phase-7-Brochure-15-resize_images.webp",
              "https://uniqueproperties.ae/en/uploads/frontend/projects/613394/conversions/Nad-Al-Sheba-Gardens-Phase-7-Brochure-17-resize_images.webp",
            ],
            highlights: [
              "Exquisite 3-bedroom townhouses and 4 to 7-bedroom villas.",
              "Swimmable lagoon surrounded by lush greenery.",
              "Architectural designs with bronze accents and large windows.",
            ],
          },
          {
            name: "Golf Dale at Emaar South",
            images: [
              "https://uniqueproperties.ae/en/uploads/frontend/projects/614161/conversions/GOLF_DALE_BROCHURE-(3)-29-resize_images.webp",
              "https://uniqueproperties.ae/en/uploads/frontend/projects/614162/conversions/GOLF_DALE_BROCHURE-(3)-6-resize_images.webp","https://uniqueproperties.ae/en/uploads/frontend/projects/614163/conversions/GOLF_DALE_BROCHURE-(3)-8-resize_images.webp"
            ],
            highlights: [
              "Modern villas with premium finishes.",
              "Surrounded by a championship golf course.",
              "Access to exclusive community clubhouses.",
            ],
          },
          {
            name: "Golf Acres at Emaar South",
            images: [
              "https://uniqueproperties.ae/en/uploads/frontend/projects/614172/conversions/GOLF_ACRES_ES_BROCHURE-34-resize_images.webp",
              "https://uniqueproperties.ae/en/uploads/frontend/projects/614173/conversions/GOLF_ACRES_ES_BROCHURE-7-resize_images.webp",
              "https://uniqueproperties.ae/en/uploads/frontend/projects/614174/conversions/GOLF_ACRES_ES_BROCHURE-9-resize_images.webp"
            ],
            highlights: [
              "Modern villas with premium finishes.",
              "Surrounded by a championship golf course.",
              "Access to exclusive community clubhouses.",
            ],
          },
        ],
        "RESALES & RENTALS": [ 
          {
            name: "Great Location | Private Pool |Burj Khalifa View",
            images: [
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/whatsapp_image_2025_04_02_at_3_37_37_pm_a1mSp0000003cLhIAI.jpeg",
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/whatsapp_image_2025_04_02_at_3_37_33_pm__1__a1mSp0000003cLhIAI.jpeg",
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/whatsapp_image_2025_04_02_at_3_37_33_pm_a1mSp0000003cLhIAI.jpeg",
            ],
            highlights: [
              "Exquisite 3-bedroom townhouses and 4 to 7-bedroom villas.",
              "Swimmable lagoon surrounded by lush greenery.",
              "Architectural designs with bronze accents and large windows.",
            ],
          },
          {
            name: " Area Expert | Large garden | prime location",
            images: [
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_4_670x500_a1mSp0000003c2LIAQ.jpg",
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_3_670x500_a1mSp0000003c2LIAQ.jpg","https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_2_670x500_a1mSp0000003c2LIAQ.jpg"
            ],
            highlights: [
              "Modern villas with premium finishes.",
              "Surrounded by a championship golf course.",
              "Access to exclusive community clubhouses.",
            ],
          },
          {
            name: "Luxury Furnishing | Chiller Free | Best Deal",
            images: [
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_2_670x500_a1mSp0000003c2LIAQ.jpg",
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/road_view_a1mSp0000003cTlIAI.jpg",
              "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/street_view_a1mSp0000003cTlIAI.jpg"
            ],
            highlights: [
              "Modern villas with premium finishes.",
              "Surrounded by a championship golf course.",
              "Access to exclusive community clubhouses.",
            ],
          },],
        "EXCLUSIVE": [
            {
                name: "Exclusive | Waterfront Living | Huge Layout",
                images: [
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/whatsapp_image_2025_04_02_at_3_37_37_pm_a1mSp0000003cLhIAI.jpeg",
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/whatsapp_image_2025_04_02_at_3_37_33_pm__1__a1mSp0000003cLhIAI.jpeg",
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/whatsapp_image_2025_04_02_at_3_37_33_pm_a1mSp0000003cLhIAI.jpeg",
                ],
                highlights: [
                  "Exquisite 3-bedroom townhouses and 4 to 7-bedroom villas.",
                  "Swimmable lagoon surrounded by lush greenery.",
                  "Architectural designs with bronze accents and large windows.",
                ],
              },
              {
                name: " Contemporary 5BR | Type 2 | Burj View",
                images: [
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_4_670x500_a1mSp0000003c2LIAQ.jpg",
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_3_670x500_a1mSp0000003c2LIAQ.jpg","https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_2_670x500_a1mSp0000003c2LIAQ.jpg"
                ],
                highlights: [
                  "Modern villas with premium finishes.",
                  "Surrounded by a championship golf course.",
                  "Access to exclusive community clubhouses.",
                ],
              },
              {
                name: " Fully Fitted | Luxury Complex",
                images: [
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/pro_int_2_670x500_a1mSp0000003c2LIAQ.jpg",
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/road_view_a1mSp0000003cTlIAI.jpg",
                  "https://salesforce-images-bucket.s3.me-central-1.amazonaws.com/Watermarked/street_view_a1mSp0000003cTlIAI.jpg"
                ],
                highlights: [
                  "Modern villas with premium finishes.",
                  "Surrounded by a championship golf course.",
                  "Access to exclusive community clubhouses.",
                ],
              },
        ],
      };
    

    export default function PropertySlider() {
    const [selectedCategory, setSelectedCategory] = useState("OFF-PLAN");
    const [selectedProperty, setSelectedProperty] = useState(properties["OFF-PLAN"][0]);

    const settings = {
        dots: false,            // Shows navigation dots
        infinite: true,        // Allows continuous looping
        speed: 500,           // Slide transition speed
        slidesToShow: 1,       // Shows one image at a time
        slidesToScroll: 1,     // Moves one slide at a time
        autoplay: true,        // Enables automatic sliding
        autoplaySpeed: 3000,   // Slide interval (3 seconds)
        arrows: true,          // Shows navigation arrows
        rtl: false,            // Ensures right-to-left is disabled
    };

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">New Properties in Dubai</h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-4">
            {categories.map((category) => (
            <button
                key={category}
                onClick={() => {
                setSelectedCategory(category);
                setSelectedProperty(properties[category][0] || null);
                }}
                className={`px-4 py-2 border rounded-md ${
                selectedCategory === category ? "bg-[var(--primary-color)] text-white" : "bg-white text-black"
                }`}
            >
                {category}
            </button>
            ))}
        </div>

{/* Property Selection for Selected Category */}
{(selectedCategory === "OFF-PLAN" || selectedCategory === "RESALES & RENTALS"|| selectedCategory==="EXCLUSIVE") && (
  <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
    {properties[selectedCategory].map((property) => (
      <button
        key={property.name}
        onClick={() => setSelectedProperty(property)}
        className={`px-4 py-2 border rounded-md ${
          selectedProperty.name === property.name ? "bg-[var(--primary-color)] text-white" : "bg-white text-black"
        }`}
      >
        {property.name}
      </button>
    ))}
  </div>
)}


       {/* Property Display */}
{selectedProperty && (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row gap-6">
    <div className="w-full md:w-2/3">
      <Slider {...settings}>
        {selectedProperty.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={selectedProperty.name}
              className="w-full h-[250px] md:h-[350px] rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
    <div className="w-full md:w-1/3">
      <h3 className="text-lg font-semibold mb-2">Key Highlights</h3>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {selectedProperty.highlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>
    </div>
  </div>
)}

        </div>
    );
    }
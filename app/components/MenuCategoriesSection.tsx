"use client";
import CategoryTabs from "./CategoryTabs";
import { images } from "../ui";
import CategoryCards from "./CategoryCards";

const menuItems = [
  {
    image: images.landingimages.CategoryImg1,
    title: "Cookies",
    description:
      "Thick, soft-centred cookies made fresh and finished with generous toppings.",
  },
  {
    image: images.landingimages.CategoryImg2,
    title: "Cinnamon buns",
    description: "Warm, indulgent and highly visual.",
  },
  {
    image: images.landingimages.CategoryImg3,
    title: "Doughnuts",
    description: "Fresh, filled and topped. Take one for now, or a box for later.",
  },
  {
    image: images.landingimages.CategoryImg4,
    title: "Seasonal Specials",
    description: "Limited-run flavours and fresh ideas that change through the year.",
  },
];

const MenuCategoriesSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-16 items-center">
          {/* Tabs */}
          <CategoryTabs
            tabs={["Bakes", "Coffee & Matcha"]}
            defaultActive={0}
            onChange={(tab) => console.log(tab)}
          />
          {/* cards */}
          <div className="grid grid-cols-4 gap-9">
            {menuItems.map((item, index) => (
              <div key={item.title} className="relative">
                <CategoryCards
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  onClick={() => {}}
                />

                {/* Vertical Divider */}
                {index !== menuItems.length - 1 && (
                  <div className="absolute top-8 -right-4 h-55 border-r [border-image:linear-gradient(180deg,#FFFFFF_0%,#808080_50%,rgba(255,255,255,0)_100%)_1]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategoriesSection;

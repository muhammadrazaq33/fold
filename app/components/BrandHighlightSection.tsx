import CheckMark from "@/public/icons/CheckMark";

const BrandHighlightSection = () => {
  return (
    <div className="py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-8">
          {/* left side content */}
          <div className="flex flex-col gap-4.5 max-w-139.5">
            <p className="text-Dune font-extrabold text-[60px] leading-none capitalize">
              Coffee, bakes and matcha -{" "}
              <span className="text-wine-red">made fresh, every day.</span>
            </p>
            <p className="text-neutral-800 font-normal text-[22px] leading-[160%] ">
              From warm cinnamon buns and proper cookies to freshly finished
              doughnuts and drinks worth stopping for, Fold is built around the
              small treats that make the day better.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3.5 items-center">
                <div className="w-6.5 h-6.5 bg-Bright-Maroon rounded-full flex justify-center items-center">
                  <CheckMark width={73} height={73} />
                </div>
                <p className="font-normal text-[22px] leading-[120%] text-neutral-800">
                  Morning coffee on the move.
                </p>
              </div>

              <div className="flex flex-row gap-3.5 items-center">
                <div className="w-6.5 h-6.5 bg-Bright-Maroon rounded-full flex justify-center items-center">
                  <CheckMark width={73} height={73} />
                </div>
                <p className="font-normal text-[22px] leading-[120%] text-neutral-800">
                  A warm bun fresh from the oven.
                </p>
              </div>

              <div className="flex flex-row gap-3.5 items-center">
                <div className="w-6.5 h-6.5 bg-Bright-Maroon rounded-full flex justify-center items-center">
                  <CheckMark width={73} height={73} />
                </div>
                <p className="font-normal text-[22px] leading-[120%] text-neutral-800">
                  A cookie you probably won’t save for later.
                </p>
              </div>

              <div className="flex flex-row gap-3.5 items-center">
                <div className="w-6.5 h-6.5 bg-Bright-Maroon rounded-full flex justify-center items-center">
                  <CheckMark width={73} height={73} />
                </div>
                <p className="font-normal text-[22px] leading-[120%] text-neutral-800">
                  A box of bakes to take back for everyone else.
                </p>
              </div>
            </div>

            <p className="font-normal text-[22px] leading-[160%] text-neutral-800">Freshly folded. Properly made. Easy to love.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandHighlightSection

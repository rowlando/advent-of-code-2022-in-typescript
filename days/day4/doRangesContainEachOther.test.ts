import doRangesContainEachOther from "./doRangesContainEachOther";

test("doesEitherRangeOfNumbersContainTheOtherOne", () => {
    expect(doRangesContainEachOther("1-3", "2-4")).toBe(false);
    expect(doRangesContainEachOther("2-4", "1-3")).toBe(false);
    expect(doRangesContainEachOther("3-4", "2-6")).toBe(true);
    expect(doRangesContainEachOther("1-63", "6-12")).toBe(true);
});
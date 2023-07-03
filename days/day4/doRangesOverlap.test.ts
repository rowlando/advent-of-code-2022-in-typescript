import doRangesOverlap from "./doRangesOverlap";

test("doRangesOverlap", () => {
    expect(doRangesOverlap("1-3", "2-4")).toBe(true);
    expect(doRangesOverlap("2-4", "1-3")).toBe(true);
    expect(doRangesOverlap("3-4", "1-2")).toBe(false);
    expect(doRangesOverlap("19-28", "31-34")).toBe(false);
});
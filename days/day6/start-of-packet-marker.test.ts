import startOfPacketMarker from "./startOfPacketMarker";

test("mjqjpqmgbljsphdztnvjfqwrcgsmlb", () => {
    expect(startOfPacketMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 4)).toBe(7);
});

test("bvwbjplbgvbhsrlpgdmjqwftvncz", () => {
    expect(startOfPacketMarker("bvwbjplbgvbhsrlpgdmjqwftvncz", 4)).toBe(5);
});

test("nppdvjthqldpwncqszvftbrmjlhg", () => {
    expect(startOfPacketMarker("nppdvjthqldpwncqszvftbrmjlhg", 4)).toBe(6);
});

test("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", () => {
    expect(startOfPacketMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 4)).toBe(10);
});

test("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", () => {
    expect(startOfPacketMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 4)).toBe(11);
});


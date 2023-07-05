import fs from "fs";
import startOfPacketMarker from "./startOfPacketMarker";

const input = fs.readFileSync("input.txt", "utf8");
console.log(startOfPacketMarker(input, 14));
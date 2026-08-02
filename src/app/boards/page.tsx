import type { Metadata } from "next";
import BoardsClient from "./BoardsClient";

export const metadata: Metadata = {
  title: "Boards",
  description: "Explore TOSS, NIOS, and BOSSE - government recognised boards for SSC and Intermediate. Choose the best board for your education.",
};

export default function BoardsPage() {
  return <BoardsClient />;
}

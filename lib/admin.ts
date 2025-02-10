import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const adminIds = ["user_2sDMjhALT5u1TN0paruvWmhCYNf"];

const getIsAdmin = async (req: NextRequest) => {
  const { userId } = await getAuth(req);

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};

export async function isAdmin(req: NextRequest) {
  const isAdmin = await getIsAdmin(req);

  if (!isAdmin) {
    return NextResponse.json({ message: "Access denied" }, { status: 403 });
  }

  return NextResponse.next();
}

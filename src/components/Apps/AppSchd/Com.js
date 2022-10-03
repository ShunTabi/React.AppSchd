
const GetNow = (f, i) => {
 if (f === "yyyy-MM-dd") {
  const now = new Date(),
   y = now.getFullYear(),
   M = now.getMonth() + i + 1,
   d = now.getDate();
  return `${y.toString().padStart(4, "0")}-${M.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`
 }
 else if (f === "HH:mm") {
  const now = new Date(),
   H = now.getHours(),
   m = now.getMinutes();
  return `${H.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
 }
}

export { GetNow };
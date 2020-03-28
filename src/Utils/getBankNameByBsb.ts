export default function(bsb: string): string {
  let firstTwo = bsb.substring(0, 2);
  switch (firstTwo) {
    case "01":
      return "ANZ";
    case "03":
    case "73":
      return "Westpac";
    case "06":
    case "76":
      return "Commonwealth";
    case "08":
    case "78":
      return "NAB";
    case "10":
      return "BankSA";
    case "11":
      return "St George Bank";
    case "12":
      return "Bank of Queensland";
    case "18":
      return "Macquarie Bank";
    case "24":
      return "Citibank";
    case "30":
      return "Bankwest";
    case "34":
      return "HSBC";
    case "48":
      return "Suncorp-Metway";
    case "61":
      return "Adelaide Bank";
    default:
  }

  let firstThree = bsb.substring(0, 3);
  switch (firstThree) {
    case "633":
      return "Bendigo";
    case "923":
      return "ING";
    default:
  }

  return "";
}

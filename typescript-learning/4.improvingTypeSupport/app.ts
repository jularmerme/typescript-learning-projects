let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number | string = 425;
originalCost = "A LOT of money";

type Cost = number | string;

if (typeof originalCost === "number") {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}

enum InventoryItemType {
  Computer = "computer",
  Furniture = "furniture",
}

// Defining custom types with interfaces
interface InventoryItem {
  displayName: string;
  inventoryType: "computer" | "furniture";
  // 'readonly' keyword => property must exists
  readonly trackingNumber: string;
  createDate: Date;
  // '?' => property is not required
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "MacBook Pro 15 Retina",
  inventoryType: "computer",
  trackingNumber: "MBP123456",
  createDate: new Date(),
});

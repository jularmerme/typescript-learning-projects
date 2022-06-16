let displayName: string = "Jess Standing Desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123456";
let createDate: Date = new Date();
// If the variable will change of data type use '|' instead of use 'any'
// let originalCost: number | string = 425;

// Create a value using the desired values
type Cost = number | string;
let originalCost: Cost;

if(typeof originalCost === 'number') {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}

originalCost = "A lot of money";

enum InventoryItemType {
  // Assign the desired value to each property using '='
  Computer = 'computer',
  Furniture = 'furniture'
}

interface InventoryItem {
  displayName: string;
  //inventoryType: InventoryItemType;
  // Can also be associated using the '|' and the properties values
  inventoryType: "computer" | "furniture";
  readonly trackingNumber: string;
  createDate: Date;
  // '?' converts the property optional
  originalCost?: number;

  // Can include some methods as well
  // addNote(note: string): string;
  addDescription?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);

// Item can also be created manually
saveInventoryItem({
  displayName: 'MSI',
  inventoryType: "computer",
  trackingNumber: "POL90873",
  createDate: new Date(),
  originalCost: 1000
});

function clone<T, U>(source: T, options: U): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized);
}

const cloned = clone(inventoryItem, { deep: true });

class KeyValuePair<TKey, TValue> {
  Key: TKey;
  Value: TValue;
}

var keyValue: KeyValuePair<string, number> = { Key: "something", Value: 12};
var keyValue2: KeyValuePair<number, boolean> = { Key: 1234, Value: false};
let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "MacBook Pro 15 Retina",
  inventoryType: "computer",
  trackingNumber: "MBP123456",
  createDate: new Date(),
});

function clone<T>(source: T): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized);
}

const cloned = clone<InventoryItem>(inventoryItem);

declare var Vue: any;

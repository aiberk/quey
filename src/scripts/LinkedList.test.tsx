import { Node, Queue } from "./LinkedList";

// test("Node constructor initializes correctly", () => {
//   const node = new Node("image.jpg", "Node1", 100, "Description");

//   expect(node.imageUrl).toBe("image.jpg");
//   expect(node.name).toBe("Node1");
//   expect(node.time).toBe(100);
//   expect(node.description).toBe("Description");
//   expect(node.next).toBeNull();
// });

test("Queue enqueue adds nodes correctly", () => {
  const queue = new Queue();

  queue.enqueue("image1.jpg", "Node1", 100, "Description1");
  queue.enqueue("image2.jpg", "Node2", 200, "Description2");

  expect(queue.front?.name).toBe("Node1");
  expect(queue.rear?.name).toBe("Node2");
  expect(queue.size()).toBe(2);
});

// Add more test cases for other methods and scenarios

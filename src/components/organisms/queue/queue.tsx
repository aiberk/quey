import React from "react";
import { useState, useEffect } from "react";
import styles from "./queue.module.css";
import {
  Node,
  Queue,
} from "/Users/abrahamiberkleid/Documents/Sandbox/quey/src/scripts/LinkedList";

const sampleQueue = [
  {
    imageUrl: "image1.jpg",
    name: "Node1",
    time: 100,
    description: "Description1",
  },
  {
    imageUrl: "image2.jpg",
    name: "Node2",
    time: 200,
    description: "Description2",
  },
  {
    imageUrl: "image3.jpg",
    name: "Node3",
    time: 300,
    description: "Description3",
  },
];

interface NodeProps {
  node: Node;
  moveForward: (nodeName: string) => void;
  moveBackward: (nodeName: string) => void;
  removeFromQueue: (nodeName: string) => void;
}

const NodeComponent: React.FC<NodeProps> = ({
  node,
  moveForward,
  moveBackward,
  removeFromQueue,
}) => {
  return (
    <li
      style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
      key={node.name}>
      <p>{node.name}</p>
      <p>{node.time}</p>
      <p>{node.description}</p>

      {node.next !== null && (
        <button onClick={() => moveForward(node.name)}>
          Move Back in Line
        </button>
      )}

      {node.prevNode !== null && (
        <button onClick={() => moveBackward(node.name)}>
          Move Forward in Line
        </button>
      )}
      <button onClick={() => removeFromQueue(node.name)}>
        Remove from Queue
      </button>
    </li>
  );
};

const QueueComponent: React.FC = () => {
  const [queue, setQueue] = useState<Queue>(new Queue());
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let q = new Queue();
    sampleQueue.forEach((node) => {
      q.enqueue(node.imageUrl, node.name, node.time, node.description);
    });
    setQueue(q);
  }, []);

  const moveForwardWithRerender = (nodeName: string) => {
    queue.moveForward(nodeName);
    setVersion((prev) => prev + 1);
  };

  const moveBackwardWithRerender = (nodeName: string) => {
    queue.moveBackward(nodeName);
    setVersion((prev) => prev + 1);
  };

  const removeFromQueueWithRerender = (nodeName: string) => {
    queue.removeFromQueue(nodeName);
    setVersion((prev) => prev + 1);
  };

  const renderQueue = (queue: Queue) => {
    let items: JSX.Element[] = [];
    let currentNode = queue.front;
    while (currentNode !== null) {
      items.push(
        <NodeComponent
          node={currentNode}
          moveForward={moveForwardWithRerender}
          moveBackward={moveBackwardWithRerender}
          removeFromQueue={removeFromQueueWithRerender}
          key={currentNode.name}
        />
      );
      currentNode = currentNode.next;
    }
    return items;
  };

  return (
    <div>
      <h2>Queue</h2>
      <ul>{renderQueue(queue)}</ul>
    </div>
  );
};

export default QueueComponent;
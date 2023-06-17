import React from "react";
import { useState, useEffect } from "react";
import styles from "./queue.module.css";
import {
  Node,
  Queue,
} from "/Users/abrahamiberkleid/Documents/Sandbox/quey/src/scripts/LinkedList";
import NodeComponent from "../node/node";

const timeInterval = 1000; // 3 seconds

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
  {
    imageUrl: "image3.jpg",
    name: "Node4",
    time: 300,
    description: "Description3",
  },
  {
    imageUrl: "image3.jpg",
    name: "Node5",
    time: 300,
    description: "Description3",
  },
];

const QueueComponent: React.FC = () => {
  const [queue, setQueue] = useState<Queue>(new Queue());
  const [version, setVersion] = useState(0);
  const [queueState, setQueueState] = useState("stopped");

  useEffect(() => {
    let q = new Queue();
    sampleQueue.forEach((node) => {
      q.enqueue(node.imageUrl, node.name, node.time, node.description);
    });
    setQueue(q);
  }, []);

  // Auto dequeue function
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (queueState === "running") {
      interval = setInterval(() => {
        if (queue.size() > 0) {
          removeFromQueueWithRerender(queue.front.name);
        }
      }, timeInterval);
    }

    return () => clearInterval(interval);
  }, [queue, version, queueState]);

  const startQueue = () => {
    setQueueState("running");
  };

  const pauseQueue = () => {
    setQueueState("paused");
  };

  const stopQueue = () => {
    setQueueState("stopped");
  };
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
      <div>
        <h2>Queue</h2>
        {queueState === "running" ? (
          <button onClick={stopQueue}>Stop</button>
        ) : (
          <button onClick={startQueue}>Start</button>
        )}
      </div>

      <ul>{renderQueue(queue)}</ul>
    </div>
  );
};

export default QueueComponent;

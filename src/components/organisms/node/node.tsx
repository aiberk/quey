import React from "react";
import { Node, Queue } from "src/scripts/LinkedList";

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

export default NodeComponent;
